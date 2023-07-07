function runCommandIf(command){
    if (command == "help"){
            // help code
            console.log(`If Command: Help`);
    }

    else if (command == "exit"){ 
        // exit code
        console.log(`If Command: Exit`);
    }

    else if (command == "go"){
        // go code
        console.log(`If Command: Go`);
    }
        
    else if (command == "use"){
        // use code
        console.log(`If Command: Use`);
    }
        
    else if (command == "choose"){
        // choose code
        console.log(`If Command: Choose`);
    }
        
    else if (command == "look"){
        // look code
        console.log(`If Command: Look`);
    }
        
    else if (command == "current"){
        // current code
        console.log(`If Command: Current`);
    }
            
    else if (command == "team"){
        // team code
        console.log(`If Command: Team`);
    }
        
    else if (command == "backpack"){
        // backpack code
        console.log(`If Command: Backpack`);
    }

    else{
        // default code
        console.log(`If Command: Default`);
    }

    
}

function runCommandSwitch(command){
    switch(command){
        case "help":
            // help code
            console.log(`Switch Command: Help`);
            break;

        case "exit": 
            // exit code
            console.log(`Switch Command: Exit`);
            break;

        case "go":
            // go code
            console.log(`Switch Command: Go`);
            break;
            
        case "use":
            // use code
            console.log(`Switch Command: Use`);
            break;
            
        case "choose":
            // choose code
            console.log(`Switch Command: Choose`);
            break;
            
        case "look":
            // look code
            console.log(`Switch Command: Look`);
            break;
            
        case "current":
            // current code
            console.log(`Switch Command: Current`);
            break;
            
        case "team":
            // team code
            console.log(`Switch Command: Team`);
            break;
            
        case "backpack":
            // backpack code
            console.log(`Switch Command: Backpack`);
            break;

        default:
            // default code
            console.log(`Switch Command: Default`);

    }
}


runCommandIf("help");
runCommandSwitch("help");