api: freetogame
link: https://www.freetogame.com
requested url: https://www.freetogame.com/api/games


i chose option A for the api because it allowed me to continue using the functions i already have. option B would have required me to go through my project and implement the new methods instead and i didnt want to do that. 

the changes i make with edit, add and delete are lost when i reload because im not actually editing the api. the changes are only saved to the session so when a new session is made all information is reset. 


///////////////////////////////////////////////////////////////////////
PS C:\Users\calib\OneDrive\Desktop\Liam_Jones_Learning_AngularF26-assignment-6> ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-RRN7CXGM.js    | main          | 321.23 kB |                85.21 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 321.23 kB |                85.21 kB

Application bundle generation complete. [3.605 seconds] - 2026-11-15T23:26:09.643Z

▲ [WARNING] NG8113: GameList is not used within the template of App [plugin angular-compiler]

    src/app/app.ts:10:26:
      10 │   imports: [RouterOutlet, GameList, Navbar],
         ╵                           ~~~~~~~~                                                                                                                                       


▲ [WARNING] NG8113: TitleCasePipe is not used within the template of GameDetail [plugin angular-compiler]

    src/app/game-detail/game-detail.ts:7:37:
      7 │   imports: [DatePipe, UpperCasePipe, TitleCasePipe, GenreLabelPipe],
        ╵                                      ~~~~~~~~~~~~~                                                                                                                        


Output location: C:\Users\calib\OneDrive\Desktop\Liam_Jones_Learning_AngularF26-assignment-6\dist\LiamJonesLearningAngularF26


/////////////////////////////////////////////////////////

Lifecycle:
when i ran the code in a constructor i got an error. this is because the object hasnt been fully created yet, so it is unable to find the id value.

it seems leaving the detail page triggers the OnDestroy, which means its not being loaded once the page has been closed. 


//////////////////////////////////////////////////////////

i stored a toggle for dark mode in memory. i chose to store this in memory because it is a setting that the user would not want to manually re apply each time they reload the screen. 
