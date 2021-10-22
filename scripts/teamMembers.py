""" format example: 
<div className={overallStyles.description} style={{marginBottom: "-3%"}}>
    JVS Toronto
</div>
<ul className={overallStyles.description}>
    <li>
        Organization providing employment and career services across the GTA
    </li>
    <li>
        Provided information on internal psychoeducational assessment for adults
    </li>
    <li>
        Played key role in the development of the diagnosis pipeline for different age groups
    </li>
</ul>
"""

info = open("memberInfo.txt", "r")
html = open("memberInfoHtml.txt", "w")
closeList = False
for line in info:
    line = line.replace("&", "&amp;")
    if line[0] == "•":
        line = line.replace("•", "")
        html.write("\t<li>\n")
        html.write("\t" + line)
        html.write("\t</li>\n")
    elif line != "\n":
        if closeList:
            html.write("</ul> \n")
            closeList = False
        html.write("<div className={overallStyles.subsubheading} style={{marginBottom: \"-3%\"}}> \n")
        html.write("\t" + line)
        html.write("</div>\n")
        html.write("<ul className={overallStyles.description}>\n")
        closeList = True
html.write("</ul> \n")
info.close()