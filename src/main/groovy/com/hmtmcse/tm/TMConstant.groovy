package com.hmtmcse.tm

class TMConstant {

    public static final String AUTHORIZED = "AUTHORIZED"

    public static final STATUS = [
            DRAFT     : "Draft",
            DONE      : "Done",
            PROCESSING: "Processing",
            PENDING   : "Pending",
            TODO      : "Todo",
    ]

    public static final PRIORITY = [
            HIGHEST: "Highest",
            HIGH   : "High",
            LOWEST : "Lowest",
            LOW    : "Low"
    ]

    public static final COMPLEXITY_TYPE = [
            UI                : "User interface",
            PROGRAMMING       : "Programming",
            UI_AND_PROGRAMMING: "UI & Programming",
            API               : "API",
            EXTERNAL_APP               : "API",
    ]


}
