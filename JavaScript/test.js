
const READLINE = require("readline-sync");

/**
 * TO DO LIST
 * Comment Pokemon class
 * Implement Pokemon
 */

/*

node pokemon.js
use Hat
2
use Backpack
go Living Room
use Hug
go Pallet Town
go Coach Sadeem's Lab
use Table

*/
let BulbasaurASCII = `
                                           /
                        _,.------....___,.' ',.-.
                     ,-'          _,.--\"        |
                   ,'         _.-'              .
                  /   ,     ,'                   \`
                 .   /     /                     \`\`.
                 |  |     .                       \\.\\
       ____      |___._.  |       __               \\ \`.
     .'    \`---\"\"       \`\`\"-.--\"'\`  \\               .  \\
    .  ,            __               \`              |   .
    \`,'         ,-\"'  .               \\             |    L
   ,'          '    _.'                -._          /    |
  ,\`-.    ,\".   \`--'                      >.      ,'     |
 . .'\\'   \`-'       __    ,  ,-.         /  \`.__.-      ,'
 ||:, .           ,'  ;  /  / \\ \`        \`.    .      .'/
 j|:D  \\          \`--'  ' ,'_  . .         \`.__, \\   , /
/ L:_  |                 .  \"' :_;                \`.'.'
.    \"\"'                  \"\"\"\"\"'                    V
 \`.                                 .    \`.   _,..  \`
   \`,_   .    .                _,-'/    .. \`,'   __  \`
    ) \\\`._        ___....----\"'  ,'   .'  \\ |   '  \\  .
   /   \`. \"\`-.--\"'         _,' ,'     \`---' |    \`./  |
  .   _  \`\"\"'--.._____..--\"   ,             '         |
  | .\" \`. \`-.                /-.           /          ,
  | \`._.'    \`,_            ;  /         ,'          .
 .'          /| \`-.        . ,'         ,           ,
 '-.__ __ _,','    '\`-..___;-...__   ,.'\\ ____.___.'
 \`\"^--'..'   '-\`-^-'\"--    \`-^-'\`.''\"\"\"\"\"\`.,^.\`.--' 
`;
let CharmanderASCII = `
              _.--\"\"\`-..
            ,'          \`.
          ,'          __  \`.
         /|          \" __   \\
        , |           / |.   .
        |,'          !_.'|   |
      ,'             '   |   |
     /              |\`--'|   |
    |                \`---'   |
     .   ,                   |                       ,\".
      ._     '           _'  |                    , ' \\ \`
  \`.. \`.\`-...___,...---\"\"    |       __,.        ,\`\"   L,|
  |, \`- .\`._        _,-,.'   .  __.-'-. /        .   ,    \\
-:..     \`. \`-..--_.,.<       \`\"      / \`.        \`-/ |   .
  \`,         \"\"\"\"'     \`.              ,'         |   |  ',,
    \`.      '            '            /          '    |'. |/
      \`.   |              \\       _,-'           |       ''
        \`._'               \\   '\"\\                .      |
           |                '     \\                \`._  ,'
           |                 '     \\                 .'|
           |                 .      \\                | |
           |                 |       L              ,' |
           \`                 |       |             /   '
            \\                |       |           ,'   /
          ,' \\               |  _.._ ,-..___,..-'    ,'
         /     .             .      \`!             ,j'
        /       \`.          /        .           .'/
       .          \`.       /         |        _.'.'
        \`.          7\`'---'          |------\"'_.'
       _,.\`,_     _'                ,''-----\"'
   _,-_    '       \`.     .'      ,\\
   -\" /\`.         _,'     | _  _  _.|
    \"\"--'---\"\"\"\"\"'        \`' '! |! /
                            \`\" \" -' 
`;
let SquirtleASCII = `
               _,........__
            ,-'            \"\`-.
          ,'                   \`-.
        ,'                        \\
      ,'                           .
      .'\\               ,\"\".       \`
     ._.'|             / |  \`       \\
     |   |            \`-.'  ||       \`.
     |   |            '-._,'||       | \\
     .\`.,'             \`..,'.'       , |\`-.
     l                       .'\`.  _/  |   \`.
     \`-.._'-   ,          _ _'   -\" \\  .     \`
\`.\"\"\"\"\"'-.\`-...,---------','         \`. \`....__.
.'        \`\"-..___      __,'\\          \\  \\     \\
\\_ .          |   \`\"\"\"\"'    \`.           . \\     \\
  \`.          |              \`.          |  .     L
    \`.        |\`--...________.'.        j   |     |
      \`._    .'      |          \`.     .|   ,     |
         \`--,\\       .            \`7\"\"' |  ,      |
            \` \`      \`            /     |  |      |    _,-'\"\"\"\`-.
             \\ \`.     .          /      |  '      |  ,'          \`.
              \\  v.__  .        '       .   \\    /| /              \\
               \\/    \`\"\"\\\"\"\"\"\"\"\"\`.       \\   \\  /.''                |
                \`        .        \`._ ___,j.  \`/ .-       ,---.     |
                ,\`-.      \\         .\"     \`.  |/        j     \`    |
               /    \`.     \\       /         \\ /         |     /    j
              |       \`-.   7-.._ .          |\"          '         /
              |          \`./_    \`|          |            .     _,'
              \`.           / \`----|          |-............\`---'
                \\          \\      |          |
               ,'           )     \`.         |
                7____,,..--'      /          |
                                  \`---.__,--.'
`;


// console.log(BulbasaurASCII)
// console.log(CharmanderASCII)
// console.log(SquirtleASCII)

let askAgain = true;
while (askAgain) {
    let rename = READLINE.question(`\n◓ Would you like to rename your partner Pokemon? (Y/N) `).toUpperCase();
    if(rename == "Y"){
        askAgain = false;
    }
    else if (rename == "N"){
        askAgain = false;
    }
}