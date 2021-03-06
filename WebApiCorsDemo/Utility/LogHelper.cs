﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Script.Serialization;

namespace WebApiCorsDemo.Utility
{
    /// <summary>
    /// logger日志输出
    /// </summary>
    public class LogHelper
    {
        private static readonly NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        /// <summary>
        /// 备注日志
        /// </summary>
        /// <param name="dec">需要捕获的参数（必须为属性类）</param>
        /// <param name="rmark">描述操作</param>
        public static void LogWriter(string rmark = "", object dec = null)
        {
            try
            {
                string logstr = "\r\n-----------------start----------------------\r\n";
                MethodBase m = new StackTrace().GetFrame(1).GetMethod();
                ParameterInfo[] pm = m.GetParameters();
                string classname = m.DeclaringType.ToString();
                string propertyName = m.Name;
                logstr = logstr + "备注:" + rmark + "\r\n";
                //写类名
                logstr = logstr + "函数类名:" + classname + "\r\n";
                //写函数方法
                logstr = logstr + "函数名称为:" + propertyName + "\r\n";
                logstr = pm.Aggregate(logstr, (current, t) => current + "函数的参数有:" + t.Name.ToString() + "\r\n");
                JavaScriptSerializer jsonSerializer = new JavaScriptSerializer();
                logstr = logstr + "函数参数值:" + jsonSerializer.Serialize(dec) + "\r\n";
                logstr += "--------------------end---------------------\r\n";
                //写日志
                logger.Info(logstr);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
            }
        }

        /// <summary>
        /// 异常捕获日志
        /// </summary>
        /// <param name="ex">异常对象（必须为属性类）</param>
        /// <param name="rmark">操作简要描述</param>
        public static void LogWriter(Exception ex, string rmark = "")
        {
            try
            {
                string logstr = "\r\n-----------------start----------------------\r\n";
                MethodBase m = new StackTrace().GetFrame(1).GetMethod();
                ParameterInfo[] pm = m.GetParameters();
                string classname = m.DeclaringType.ToString();
                string propertyName = m.Name;
                logstr = logstr + "备注:" + rmark + "\r\n";
                //写类名
                logstr = logstr + "函数类名:" + classname + "\r\n";
                //写函数方法
                logstr = logstr + "函数名称为:" + propertyName + "\r\n";
                logstr = pm.Aggregate(logstr, (current, t) => current + "函数的参数有:" + t.Name.ToString() + "\r\n");
                logstr = logstr + "函数异常:" + ex.ToString() + "\r\n";
                logstr += "--------------------end---------------------\r\n";
                //写日志
                logger.Info(logstr);
            }
            catch (Exception ex2)
            {
                logger.Error(ex2);
            }
        }

        /// <summary>
        /// 带参数 异常的日志
        /// </summary>
        /// <param name="dec">异常参数对象（必须为属性类）</param>
        /// <param name="ex">日志异常对象</param>
        public static void LogWriter(object dec, Exception ex)
        {
            try
            {
                string logstr = "\r\n-----------------start----------------------\r\n";
                MethodBase m = new StackTrace().GetFrame(1).GetMethod();
                ParameterInfo[] pm = m.GetParameters();
                string classname = m.DeclaringType.ToString();
                string propertyName = m.Name;
                //写类名
                logstr = logstr + "函数类名:" + classname + "\r\n";
                //写函数方法
                logstr = logstr + "函数名称为:" + propertyName + "\r\n";
                logstr = pm.Aggregate(logstr, (current, t) => current + "函数的参数有:" + t.Name.ToString() + "\r\n");
                JavaScriptSerializer jsonSerializer = new JavaScriptSerializer();
                logstr = logstr + "函数参数值:" + jsonSerializer.Serialize(dec) + "\r\n";
                logstr = logstr + "函数异常:" + ex.ToString() + "\r\n";
                logstr += "--------------------end---------------------\r\n";
                //写日志
                logger.Info(logstr);
            }
            catch (Exception ex2)
            {
                logger.Error(ex2);
            }
        }

        /// <summary>
        /// 带参数 描述 异常日志捕获
        /// </summary>
        /// <param name="dec">所要捕获的参数（必须为属性类）</param>
        /// <param name="ex">异常对象</param>
        /// <param name="rmark">描述</param>
        public new static void LogWriter(object dec, Exception ex, string rmark)
        {
            try
            {
                string logstr = "\r\n-----------------start----------------------\r\n";
                MethodBase m = new StackTrace().GetFrame(1).GetMethod();
                ParameterInfo[] pm = m.GetParameters();
                string classname = m.DeclaringType.ToString();
                string propertyName = m.Name;
                //写备注
                logstr = logstr + "备注:" + rmark + "\r\n";
                //写类名
                logstr = logstr + "函数类名:" + classname + "\r\n";
                //写函数方法
                logstr = logstr + "函数名称为:" + propertyName + "\r\n";
                //for (int i = 0; i < pm.Length; i++)
                //{
                //    logstr = logstr + "函数的参数有:" + pm[i].Name.ToString() + "\r\n";
                //}
                logstr = pm.Aggregate(logstr, (current, t) => current + "函数的参数有:" + t.Name.ToString() + "\r\n");
                JavaScriptSerializer jsonSerializer = new JavaScriptSerializer();
                logstr = logstr + "函数参数值:" + jsonSerializer.Serialize(dec) + "\r\n";
                logstr = logstr + "函数异常:" + ex.ToString() + "\r\n";
                logstr += "--------------------end---------------------\r\n";
                //写日志
                logger.Info(logstr);
            }
            catch (Exception ex2)
            {
                logger.Error(ex2);
            }
        }
    }
}