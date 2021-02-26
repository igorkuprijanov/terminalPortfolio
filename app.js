
//phrases to print

let mainIntro = "Welcome to my portfolio. My name is Igor Kuprijanov and I develop websites. Check the menu below to navigate. You can also navigate through the input. To see all commands type ‘help’. So what would you like to know?"
let navigationItems = [">>About me", ">>Projects", ">>Education", ">>Contacts"]
let userInput = "|"
let aboutPar1 = "My name is Igor Kuprijanov. Originally I am from Estonia, but recently I have moved to the Netherlands and currently live in Rotterdam. I speak multiple language including but not limited to English, Russian and Estonian. What I do is I develop websites using various web technologies. Sometimes I also design the websites I make. My role is to develop frontend part of the website from start to finish, optimize its preformance and achive best user experience possible."
let aboutPar2 = "I always try to learn something new and improve the existing skills by exploring new technologies. Nevertheless here are some of the technologies I have mastered by far:"
let skills1 = ["Programming languages:", "HTML", "CSS", "JavaScript"]
let skills2 = ["CSS libraries:", "Bootstrap", "Skeleton", "Animate.css", "Materialize"]
let skills3 = ["JS frameworks and libraries:", "ReactJS", "Redux", "React Router", "Material UI", "Three.js", "Drei", "Anime.js"]
let projectMainText = "Below you can see some of my recent projects togethere with the technologies used and notable features:"
let project1 = ['Spencer Landscaping', 'Link to the website', "Link to the github repo", 'A landing page built with ReactJS and React Router. Site features description of the company and a filterable gallery with their works. Also it has a live price calculator.']
let project2 = ['Delicatesso Restorante', 'Link to the website', 'Link to the github repo', 'Restorants landing page with some cool concept. All pages are made as if they were menu cards. It’s developed with pure JavaScript and animate.css visual library. Also has a table booking function.']
let project3 = ['Solitaire', 'Link to the website', 'Link to the github repo', 'A famous one player spider solitaire card game. Made with JavaScript and a Deck of Cards API. It uses Drag and Drop HTML API, thus its unplayable on mobile devices.']
let project4 = ['Nova Tabernam', 'Link to the website', 'Link to the github repo', 'This is a webshop that sells cosmetic products and lotions. Website is built with React and uses Reacts’s version of Three.js to display 3D models of the products. Also uses React Router for navigation']
let eduPar1 = 'When it comes to my education in the field of web development - I am self thought, I learned most of it by myself on pure enthusiasm and passion for the field and yet I am still full of motivation to keep learning moder. However I studied Robotics at Tallinn University of Technology, which got me into programming, but it had nothing to do with web development. I strongly encourage you to not be discouraged by this and judge the result rather than my background.'
let eduPar2part1 = 'Also during my learning of web development I have obtained some certificates in ‘Front end libraries’, ‘Javascript algorithms and data structures’ and ‘Responsive web design’ from a well renown online learning platform'
let ffcLink = 'freecodecamp.org' 
let eduPar2part2 = 'all of which can bee seen below.'
let contactsPar1 = 'You can reach me via the e-mail. Just fill out this form and your mail will be sent straight to my mailbox. I keep a close eye on it so you can expect a reply in no time.'
let contactsPar2 = 'If e-mail is not your preference, you can reach me via the phone number specified in my CV.'
let invalidInputMessage = "Invalid input. Please enter a valid command or type 'help' to see all commands"
let jokes = [{q:'Q: What did Neil Armstrong say when no one laughed at his moon jokes?', a:'A: “I guess you had to be there.”'},{q:'Q: What do you call sad coffee?', a:'A: Despresso'},{q:'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol', a:''},{q:'Q: What is the biggest lie in the entire universe?', a:'A: "I have read and agree to the Terms & Conditions."'},{q:'Q: Why did the PowerPoint Presentation cross the road?', a:'A: To get to the other slide.'},{q: 'I just got fired from my job at the keyboard factory. They told me I was not putting in enough shifts.', a: ""},{q: 'Did you hear about the statistician who drowned crossing a river? It was three feet deep, on average.', a: ""}, {q: 'Infinitely many mathematicians walk into a bar.The first says, "Give me a beer." The second says, "I will have a half a beer." The third says, "A quarter of a beer, please." The bartender pours two beers and says, "Come on, people. Know your limits."', a: ""}]
let helpText = "You can navigate through the page with this input bar. There are also some unique commands unaccessible otherwise. List of available commands is here:"
let commandList = ['>>help', '>>about', '>>projects', '>>education', '>>contacts', '>>joke', '>>game', '>>clear']
let projectImages = ['project1Pic.jpg', 'project2Pic.png', 'project3Pic.jpg', 'project4Pic.jpg']
let cerificates = ['certificate1.jpg', 'certificate2.jpg', 'certificate3.jpg']
let cerificatePDFs = ['./Fron end Libraries Certification.pdf', './Javascript and Algorithms Certification.pdf', './Responsive Design Certification.pdf']


let origin = document.getElementById('container').innerHTML


//main introductory function

function main(){

    print(mainIntro, document.getElementById('mainText'))
    
    setTimeout(function(){print(navigationItems[0], document.getElementById('aboutLink'))}, 6000)
    setTimeout(function(){print(navigationItems[1], document.getElementById('projectsLink'))}, 6500)
    setTimeout(function(){print(navigationItems[2], document.getElementById('educationLink'))}, 7000)
    setTimeout(function(){print(navigationItems[3], document.getElementById('contactsLink'))}, 7500)
    
    setTimeout(function(){print(userInput, document.getElementById('userInput'))}, 8000)
}



//create about page

function about(){
    status()
    document.getElementById('aboutLink').setAttribute('class', 'active')
    document.getElementById('about').style.display = 'flex'
    print(aboutPar1, document.getElementById('aboutPar1'))
    setTimeout(function(){print(aboutPar2, document.getElementById('aboutPar2'))}, 10000)
    
    setTimeout(function(){print(skills1[0], document.getElementById('skills1Title'))}, 15000)
    setTimeout(function(){
    for(let i = 1; i<skills1.length; i++){
        let newListItem = document.createElement('p')
        newListItem.setAttribute('class', 'skillsItem')
        document.getElementById('skills1').appendChild(newListItem)
        print(skills1[i], newListItem)
    }
    }, 16000)
    
    setTimeout(function(){print(skills2[0], document.getElementById('skills2Title'))}, 17000)
    setTimeout(function(){
    for(let i = 1; i<skills2.length; i++){
        let newListItem = document.createElement('p')
        newListItem.setAttribute('class', 'skillsItem')
        document.getElementById('skills2').appendChild(newListItem)
        print(skills2[i], newListItem)
    }
    }, 18000)
    
    setTimeout(function(){print(skills3[0], document.getElementById('skills3Title'))}, 19000)
    setTimeout(function(){
    for(let i = 1; i<skills3.length; i++){
        let newListItem = document.createElement('p')
        newListItem.setAttribute('class', 'skillsItem')
        document.getElementById('skills3').appendChild(newListItem)
        print(skills3[i], newListItem)
    }
    }, 20000)
}

//create projects page

function projects(){
    status()
    document.getElementById('projectsLink').setAttribute('class', 'active')
    document.getElementById('projects').style.display = 'flex'
    //first project
    let newImage = document.createElement('img')
    newImage.setAttribute('src', projectImages[0])
    document.getElementById('project1Img').appendChild(newImage)
    for(let i=0; i<project1.length; i++){
        setTimeout(function(){
            print(project1[i], document.getElementById('projectTextContainer1').children.item(i))
        }, ((i*800)+100))
    }
    //second project
    setTimeout(function(){
       let newImage = document.createElement('img')
        newImage.setAttribute('src', projectImages[1])
        document.getElementById('project2Img').appendChild(newImage)
    for(let i =0; i<project2.length; i++){
        setTimeout(function(){
            print(project2[i], document.getElementById('projectTextContainer2').children.item(i))
        }, ((i*800)+100))
    }}, 7000)
    //third project
    setTimeout(function(){
        let newImage = document.createElement('img')
        newImage.setAttribute('src', projectImages[2])
        document.getElementById('project3Img').appendChild(newImage)
    for(let i =0; i<project3.length; i++){
        setTimeout(function(){
            print(project3[i], document.getElementById('projectTextContainer3').children.item(i))
        }, ((i*800)+100))
    }
    }, 14300)
    //fourth project
    setTimeout(function(){
    let newImage = document.createElement('img')
    newImage.setAttribute('src', projectImages[3])
    document.getElementById('project4Img').appendChild(newImage)
    for(let i =0; i<project4.length; i++){
        setTimeout(function(){
            print(project4[i], document.getElementById('projectTextContainer4').children.item(i))
        }, ((i*800)+100))
    }
    }, 21000)
    console.log(test)
}


//create education page

function education(){
    status()
    document.getElementById('educationLink').setAttribute('class', 'active')
    document.getElementById('education').style.display = 'flex'
    print(eduPar1, document.getElementById("eduPar1text"))
    setTimeout(function(){
        print(eduPar2part1, document.getElementById('eduPar2text1'))
    }, 9900)
    setTimeout(function(){
        document.getElementById('ffcLink').innerHTML = ffcLink;
        document.getElementById('ffcLink').style.animationName = 'ffcLink-in'
    }, 15000)
    setTimeout(function(){
        print(eduPar2part2, document.getElementById('eduPar2text2'))
    }, 15800)
    setTimeout(function(){
        for(let i =0; i<cerificates.length; i++){
            let certificateImage = document.createElement('img')
            certificateImage.setAttribute('src', cerificates[i])
            certificateImage.setAttribute('class', 'certificate')
            certificateImage.addEventListener('click', function(){
                window.open(cerificatePDFs[i])
            })
            document.getElementById('cerfificateContainer'+i).appendChild(certificateImage)
        }
    }, 17000)
}


//create contacts page

function contacts(){
    status()
    document.getElementById('contactsLink').setAttribute('class', 'active')
    document.getElementById('contacts').style.display = 'flex'
    print(contactsPar1, document.getElementById('contactsPar1'))
    setTimeout(function(){print(contactsPar2, document.getElementById('contactsPar2'))}, 3600)
    setTimeout(function(){
        for(let i = 0; i<5; i++){
            setTimeout(function(){
                document.getElementById('form').children.item(i).style.display = 'flex'
                document.getElementById('form').children.item(i).style.animationName = 'form-in'
            }, ((i*1000)+300))
        }
    },5500)
    setTimeout(function(){
        document.getElementById('formSubmitButton').style.display = 'block'
        document.getElementById('formSubmitButton').style.animationName = 'submitButton-in'
        
        document.getElementById('form').addEventListener('submit', function(event){
        this.contact_number.value = Math.random()*100000 | 0;
        emailjs.sendForm('mymain', 'contact_form', this)
        .then(function(){
            console.log('success!')
        }, function(error){
            console.log('failed...', error)
        })
        })
    }, 10000)
}


//create joke page
function joke(){
    status()
    document.getElementById('joke').style.display = 'flex'
    let joke = jokes[Math.floor(Math.random()*Math.floor(jokes.length))]
    print(joke.q, document.getElementById('jokeQuestion'))
    setTimeout(function(){print(joke.a, document.getElementById('jokeAnwser'))}, 3000)
    
}


//create help page
function help(){
    status()
    document.getElementById('help').style.display = 'flex'
    print(helpText, document.getElementById('helpText'))
    setTimeout(function(){
        for(let i =0; i<commandList.length; i++){
        let newElement = document.createElement('p')
        newElement.setAttribute('class', 'commandListItem')
        document.getElementById('helpCommandList').appendChild(newElement)
        setTimeout(function(){print(commandList[i], document.getElementById('helpCommandList').children.item(i))}, ((i*300)+400))
    }
    }, 3000)
}


//create game page
function game(){
    status()
    document.getElementById('game').style.display = 'flex'
    document.getElementById('rock').addEventListener('click', play)
    document.getElementById('paper').addEventListener('click', play)
    document.getElementById('scissors').addEventListener('click', play)
}
function play(event){
    //disable listeners
    document.getElementById('rock').removeEventListener('click', play)
    document.getElementById('paper').removeEventListener('click', play)
    document.getElementById('scissors').removeEventListener('click', play)
    
    //get choices
    let playerChoice = event.target.id
    function choice(){
        let choice = Math.floor(Math.random() * Math.floor(3))
        switch(choice){
            case 0:
                choice = 'rock'
                break;
            case 1: 
                choice = 'paper'
                break;
            case 2:
                choice = 'scissors'
                break;
        }
        return choice
    }
    
    let compChoice = choice()
    //compare choices
    function compare(){
        if(playerChoice == 'rock'){
            if(compChoice == 'rock'){
                draw()
            }else if(compChoice == 'paper'){
                lose()
            }else if(compChoice == 'scissors'){
                win()
            }
        }else if(playerChoice == 'paper'){
            if(compChoice == 'rock'){
                win()
            }else if( compChoice == 'paper'){
                draw()
            }else if(compChoice == 'scissors'){
                lose()
            }
        }else if(playerChoice == 'scissors'){
            if(compChoice == 'rock'){
                lose()
            }else if(compChoice == 'paper'){
                win()
            }else if(compChoice == 'scissors'){
                draw()
            }
        }
    }
    
    let playerScore = parseInt(document.getElementById('playerScore').innerHTML)
    let compScore = parseInt(document.getElementById('compScore').innerHTML)
    
    //outcome
    function win(){
        console.log('win')
        gameAnimation("player")
        playerScore =  playerScore+1
        document.getElementById('playerScore').innerHTML = playerScore
        
    }
    
    function lose(){
        gameAnimation("comp")
        console.log('lose')
        compScore = compScore +1
        document.getElementById('compScore').innerHTML = compScore
    }
    
    function draw(){
        gameAnimation()
        console.log('draw')
    }
    
    //animation
    function gameAnimation(who){
        document.getElementById('gameInstruction').innerHTML = playerChoice.toUpperCase() + ' VS ' + compChoice.toUpperCase()
        if(who == "player"){
            document.getElementById('playerScore').style.color = "#02fd54"
            setTimeout(function(){
                document.getElementById('playerScore').style.color = '#f1f1f1'
            }, 400)
        }else if(who == 'comp'){
            document.getElementById('compScore').style.color = "#e23845"
            setTimeout(function(){
                document.getElementById('compScore').style.color = '#f1f1f1'
            }, 400)
        }
    }
    
    console.log(playerChoice)
    console.log(compChoice)
    compare()
    
    //reanable listeners
    setTimeout(function(){
        document.getElementById('rock').addEventListener('click', play)
        document.getElementById('paper').addEventListener('click', play)
        document.getElementById('scissors').addEventListener('click', play)
    }, 1000)
}


//status handling => if one section is opened - close all others - also not possible to go to the same section twice - also change section color in nav menu

function status(){

    document.getElementById('aboutLink').removeAttribute('class')
    document.getElementById('projectsLink').removeAttribute('class')
    document.getElementById('educationLink').removeAttribute('class')
    document.getElementById('contactsLink').removeAttribute('class')
    
    document.getElementById('invalidMessage').innerHTML = ''
    document.getElementById('container').innerHTML = origin
    for(let i = 0; i<document.getElementById('container').children.length; i++){
        document.getElementById('container').children.item(i).style.display = 'none'
        
    }
}


//invalid input handling


function invalidInput(){

    if(document.getElementById('invalidMessage').innerHTML != ''){
        //delete old one and insert new to repeat animation
        document.getElementById('invalidMessage').remove()
        let el = document.createElement('p')
        el.setAttribute('id', 'invalidMessage')
        el.innerHTML = invalidInputMessage
        document.getElementById('invalidContainer').appendChild(el)
        document.getElementById('invalidMessage').setAttribute('class', 'blinking')
    }else{
        print(invalidInputMessage, document.getElementById('invalidMessage'))
    }
}


//prints provided string

function print(what, where){
    let text = what.split("")
    let element = where
    writeText()
    
    function writeText(){
        text.length > 0 ? element.innerHTML += text.shift() : clearTimeout(running)
        let running = setTimeout(writeText, 20)
    }
}

function formSubmit(event){
    event.preventDefault()
    alert('Your message has been sent. I will get in contact with you as soon as possible')
}




//input listener, initialize after main is printed
//input is always active and everything typed on the keyboard is written into the userInput, only exception is filling out a form


//if mobile => click on the input field opens a prompt box
function ifMobile(){
     if(screen.width <= 770){
         console.log('its mobile')
         document.getElementById('input').addEventListener('click', promptInput)
     }
}
ifMobile()

function promptInput(){
    document.getElementById('userText').innerHTML = ''
    let mobileInput = prompt("Enter the command here")
    console.log(mobileInput)
    document.getElementById('userText').innerHTML = mobileInput
    document.dispatchEvent(new KeyboardEvent('keyup', {'key': 'Enter'}))
    
}

function input(event){
    if(document.activeElement != document.getElementById('nameInput') && document.activeElement != document.getElementById('companyInput') && document.activeElement != document.getElementById('emailInput') && document.activeElement != document.getElementById('formMessage')){
       if(event.key == "Enter"){
        let open = document.getElementById('userText').innerText.toLowerCase()
        switch(open){
            case 'about':
            case'about me':
            case 'aboutme':
                about()
                break;
            case 'project':
            case 'projects':
                projects()
                break;
            case 'education':
            case 'edu':
            case 'eductaional':
                education()
                break;
            case 'contact':
            case 'contacts':
                contacts()
                break;
            case 'joke':
                joke()
                break;
            case 'help':
            case '?':
                help()
                break;
            case 'game':
            case 'play':
                game()
                break;
            default:
                invalidInput()
                break;
               }
        
    }else if(event.key == "Backspace"){
        let oldString = document.getElementById('userText').innerHTML.split("")
        oldString.pop()
        oldString.toString()
        let newString =""
        for(let i = 0; i<oldString.length; i++){
            newString += oldString[i]
        }
        document.getElementById('userText').innerHTML = newString
    }else if(String.fromCharCode(event.keyCode).match(/(\w|\s)/g)){
        document.getElementById('userText').innerHTML += event.key 
    }
       }
}

document.addEventListener('keyup', (event)=>{input(event)})
document.getElementById('aboutLink').addEventListener('click', about)
document.getElementById('projectsLink').addEventListener('click', projects)
document.getElementById('educationLink').addEventListener('click', education)
document.getElementById('contactsLink').addEventListener('click', contacts)

//lenth*20 = time to print + add some rest times
function what(){
    console.log(aboutPar1.length)
}
document.addEventListener('click', what)

window.onload = function(){
    main()
}