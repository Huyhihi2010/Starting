export default class GameBox{
    constructor({ link , title, img , description , id }){
        this.link = link;
        this.title = title;
        this.description = description;
        this.append = document.getElementById(id);
        this.img = img;
    }
    setup() {

        //div
        this.div = document.createElement('div');
        this.div.id = this.title+"-nav"
        this.div.innerHTML = `
        <h1 class="title-nav-game">${this.title}</h1>
        <div class="des-body-game">
            <img src="${this.img}" width="99%">
            <br>
            <br>
            <a href="${this.link}" target="_blank"><button id="${this.title}-button-game">Try now!</button></a>
            <br>
            <span style="font-size: 14px;">${this.description}</span>
        </div>
        `;
        this.div.style = `
        margin-top: 20px;
        margin-left: 18%;
        text-align: center;
        width: 64%;
        background-color: rgb(101, 99, 220);
        border: 2px solid rgb(81, 79, 200);
        border-radius: 15px;
        `;

        //append
        this.append.appendChild(this.div);

        //button
        document.getElementById(this.title+"-button-game").style = `
        width: 85%;
        height: 25px;
        border-radius: 12px;
        border: 0px;
        background-color: rgb(151, 129, 260);
        color: white;
        `

        document.getElementById(this.title+"-button-game").addEventListener('mouseover', () => {
            document.getElementById(this.title+"-button-game").style = `
            width: 85%;
            height: 25px;
            border-radius: 12px;
            border: 0px;
            background-color: rgb(171, 149, 280);
            color: white;
            `
        })

        document.getElementById(this.title+"-button-game").addEventListener('mouseout', () => {
            document.getElementById(this.title+"-button-game").style = `
            width: 85%;
            height: 25px;
            border-radius: 12px;
            border: 0px;
            background-color: rgb(151, 129, 260);
            color: white;
            `
        })
    }
}