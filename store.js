//this is where we store all the pages
const STORE = {
    questions:  [
        {
        //1
            question: "What is one of the most common mammal species found in this habitat?",
            options: [
            "racoons", 
            "opossums", 
            "red fox", 
            "white-tailed deer"
            ],
            answer: "white-tailed deer"
        },
        {
        //2
            question: "What is one of the most common native tree species found in this habitat?",
            options: [
                "Red Maple", 
                "Birch", 
                "Ash", 
                "White Oak"
            ],
            answer: "Red Maple"
        },
        {
        //3
            question: "What is a vernal pool?",
            options: [
                "a fairy swimming hole", 
                "a seasonally isolated pool filled with water from melted snow and rain, critical for amphibians and other invertabrates", 
                "a group of friends betting on how many leaves will fall in their yard", 
                "a puddle for ants"
            ],
            answer: "a seasonally isolated pool filled with water from melted snow and rain, critical for amphibians and other invertabrates"
        },
        {
        //4
            question: "What are some invasive species that threaten these forests?",
            options: [
                "Brown Marmorated Stink Bug", 
                "Gypsy Moth", 
                "Spotted Lanternfly", 
                "All of the Above"
            ],
            answer: "All of the Above"
        },
        {
        //5
            question: "What are other threats facing the forest?",
            options: [
                "Red Maple", 
                "Birch", 
                "Ash", 
                "All of the Above"
            ],
            answer: "All of the Above"
            },
    ],
    currentQuestion: 0,
    score: 0
    
};