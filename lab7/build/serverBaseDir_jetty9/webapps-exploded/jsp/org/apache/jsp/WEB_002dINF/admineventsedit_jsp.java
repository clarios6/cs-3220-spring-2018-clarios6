package org.apache.jsp.WEB_002dINF;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class admineventsedit_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("  <head>\n");
      out.write("    <meta charset=\"utf-8\">\n");
      out.write("    <link rel=\"stylesheet\" type=\"text/css\" href=\"../app.css\">\n");
      out.write("    <title>Incremental Game</title>\n");
      out.write("    <style media=\"screen\">\n");
      out.write("    body{\n");
      out.write("      background-color: #7FFF00;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    #wrap{\n");
      out.write("      float: left;\n");
      out.write("    }\n");
      out.write("    .add-event{\n");
      out.write("      float: left;\n");
      out.write("    }\n");
      out.write("    .event-table{\n");
      out.write("      float: right;\n");
      out.write("      text-align: left;\n");
      out.write("      padding-left: 100px;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    th, td{\n");
      out.write("      border: 1px solid #00FFFF;\n");
      out.write("      padding: 10px;\n");
      out.write("    }\n");
      out.write("    </style>\n");
      out.write("  </head>\n");
      out.write("  <body>\n");
      out.write("    <h1>Editing Event</h1>\n");
      out.write("    <div id=\"wrap\">\n");
      out.write("      <form class=\"add-event\"  method=\"post\">\n");
      out.write("        <label for=\"eventname\">Event Name</label><br>\n");
      out.write("        <input type=\"text\" name=\"eventname\" placeholder=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${ev.getName()}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\"><br>\n");
      out.write("        <label for=\"eventdescription\">Event Description</label><br>\n");
      out.write("        <input type=\"text\" name=\"eventdescription\" placeholder=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${ev.getDescription()}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\"><br>\n");
      out.write("        <label for=\"triggerat\">Trigger At</label><br>\n");
      out.write("        <input type=\"text\" name=\"triggerat\" placeholder=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${ev.getTriggerAt()}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("\"><br>\n");
      out.write("        <button>Confirm</button>\n");
      out.write("      </form>\n");
      out.write("    </div>\n");
      out.write("  </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}