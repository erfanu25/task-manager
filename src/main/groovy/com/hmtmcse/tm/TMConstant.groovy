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
            NA     : "N/A",
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
            EXTERNAL_APP      : "API",
    ]

    public static final COMPLEXITY_TASK_TYPE = [
            DEVELOPMENT: "Development",
            QA         : "Quality Assurance",
            CODE_REVIEW: "Code Review",
            RA         : "Requirement Analysis",
            OTHERS     : "Others",
    ]

    public static final WORK_LOG_TYPE = [
            TESTING    : "Testing",
            DEVELOPMENT: "Development",
            ANALYSIS   : "Analysis",
            OTHERS     : "Others",
    ]

    public static final BUG_REPORT_TYPE = [
            PARALLEL_TESTING   : "Parallel Testing",
            QA_TESTING         : "QA Testing",
            INTEGEATION_TESTING: "Integration Testing",
            STAGING_TESTING    : "Staging Testing",
            AUTOMATION_TESTING : "Automation Testing",
            LOAD_TESTING       : "Load Testing",
            HAPPY_TESTING      : "Happy Testing",
    ]


}
