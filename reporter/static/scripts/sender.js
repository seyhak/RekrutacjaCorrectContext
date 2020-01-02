import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Report} from '../components/report/report';

//////////////////////////AJAX SENDER/////////////////////////////////////////////////////////////
class ExportedReport
{
    constructor()
    {
        console.log("exporting");
        this.reportName;
        this.format;
        this.email;
        this.scheduleType;
        this.scheduleDate;
        this.scheduleTime;
        this.scheduleDay;
        this.createJSON();
    }
    getJSON()
    {
        return JSON.stringify(this);
    }
    createJSON()
    {
        this.reportName = $("#report-name").val();
        this.format = $('input[name="formatRadioOptions"]').val();
        for(var i=0; i<this.format.length;i++)
        {
            if(this.format[i].checked)
            {
                this.format=this.format[i].val();
                break;
            }
        }
        this.email = $("#email").val();
        this.scheduleType = document.getElementsByName("scheduleType");
        for(var i=0; i<this.scheduleType.length;i++)
        {
            if(this.scheduleType[i].checked)
            {
                this.scheduleType=this.scheduleType[i].value;
                break;
            }
        }
        this.scheduleDate="";
        this.scheduleTime="";
        this.scheduleDay="";
        switch(this.scheduleType)
        {
            case "Specific Date":
                {
                    this.scheduleDate=$("#schedule-date").val();
                    this.scheduleTime=$("#schedule.time").val();
                    break;
                }
            case "Daily":
                {
                    this.scheduleTime=$("#schedule.time").val();
                    break;
                }
            case "Weekly":
                {
                    this.scheduleDay=$("#select-day").val();
                    break;
                }
            default:
                break;
        }
    }
}
class Sender
{
    static postReport()
    {   
        var user = new ExportedReport(); 
        var jsonFile = user.getJSON();
        var url = "https://postman-echo.com/post";
        $.ajax({
            method: "POST",
            url: url,
            timeout: 0,
            data: jsonFile,
            success: function(params) {
                alert("Export file request posted to postman-echo.com");
            },
        });
        url = "http://127.0.0.2:8000/rest/postman/";
        $.ajax({
            method: "POST",
            url: url,
            data: 'application/json',
            success: function(params) {
                alert("Export file request posted to Django Postman");
            },
            async: false, ///// Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience
        });
    }
}
window.Sender = Sender;
//adding to global (for onclick)
window.scheduleReactContainer = function scheduleReactContainer() 
{
    console.log("reakcja");
    ReactDOM.render(<Report />, document.getElementById("schedule-container"));
}
//////////////////////////END OF AJAX/////////////////////////////////////////////////////////////