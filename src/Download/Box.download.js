export default class BoxDownload{
    constructor({ file , link , title , img , description , author , id , password : { use , Pass } }) {
        this.file = file;
        this.link = link;
        this.title = title;
        this.img = img;
        this.description = description;
        this.author = author;
        this.id = document.getElementById(id);
        this.password = {
            use: use,
            Pass: Pass ? use === false : null
        }
    }
    setup() {

        //div
        this.div = document.createElement('div');
        this.div.id = this.title+"-download";
        this.div.innerHTML = `
        <h1 class="title-nav-download">${this.title}</h1>
        <div class="des-body-download">
            <img src="${this.img}" width="99%">
            <p style="color: rgb(171, 109, 180);font-size: 12px;">Made by ${this.author}</p>
            <a href="${this.file}" download><button id="${this.title}-button-download">Download</button></a>
            <a href="${this.link}" target="_blank"><button id="${this.title}-button-try">Try it</button></a>
            <br>
            <span style="font-size: 14px;">${this.description}</span>
        </div>
        `;
        this.div.style = `
        margin-top: 20px;
        margin-left: 18%;
        text-align: center;
        width: 64%;
        background-color: rgb(101, 49, 120);
        border: 2px solid rgb(81, 29, 100);
        border-radius: 15px;
        transition: 0.5s;
        `;

        //append
        this.id.appendChild(this.div);

        //button 1
        document.getElementById(this.title+"-button-download").style = `
        width: 35%;
        height: 25px;
        border-radius: 12px;
        border: 0px;
        background-color: rgb(131, 79, 150);
        color: white;
        transition: 0.5s;
        `

        document.getElementById(this.title+"-button-download").addEventListener('mouseover', () => {
            document.getElementById(this.title+"-button-download").style = `
            width: 35%;
            height: 25px;
            border-radius: 12px;
            border: 0px;
            background-color: rgb(161, 99, 170);
            color: white;
            box-shadow: 0px 0px 10px rgb(171, 109, 180), 0px 0px 20px rgb(171, 109, 180), 0px 0px 40px rgb(171, 109, 180);
            transition: 0.5s;
            `
        })

        document.getElementById(this.title+"-button-download").addEventListener('mouseout', () => {
            document.getElementById(this.title+"-button-download").style = `
            width: 35%;
            height: 25px;
            border-radius: 12px;
            border: 0px;
            background-color: rgb(131, 79, 150);
            color: white;
            transition: 0.5s;
            `
        })

        //button 2
        document.getElementById(this.title+"-button-try").style = `
        width: 35%;
        height: 25px;
        border-radius: 12px;
        border: 0px;
        background-color: rgb(131, 179, 50);
        color: white;
        transition: 0.5s;
        `

        document.getElementById(this.title+"-button-try").addEventListener('mouseover', () => {
            document.getElementById(this.title+"-button-try").style = `
            width: 35%;
            height: 25px;
            border-radius: 12px;
            border: 0px;
            background-color: rgb(161, 199, 50);
            color: white;
            box-shadow: 0px 0px 10px rgb(171, 209, 50), 0px 0px 20px rgb(171, 209, 50), 0px 0px 40px rgb(171, 209, 50);
            transition: 0.5s;
            `
        })

        document.getElementById(this.title+"-button-try").addEventListener('mouseout', () => {
            document.getElementById(this.title+"-button-try").style = `
            width: 35%;
            height: 25px;
            border-radius: 12px;
            border: 0px;
            background-color: rgb(131, 179, 50);
            color: white;
            transition: 0.5s;
            `
        })
    }
}