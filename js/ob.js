

window.onload=()=>{
    
    
}
    let allPt = []
    let allArea = []
    class specLoc{
        constructor(x,y,l){
            this.x = x;
            this.y = y;
            this.l = l;

        }

    }
    class Area{
        constructor(id,x,y,l){
            this.id = id
            this.x = x;
            this.y = y;
            this.l = l;
            this.popCount = 0;
            this.newPeople = [];
            this.birthRate = 100;
            this.deathRate = 10;
            this.developCount = 0;
            this.bearing = this.l/dotSize*2;
            this.deathCount = 0;
            this.conbinedCount = 0
            this.combineCD = this.conbinedCount * 2
            this.colorH = Math.random()*360
            this.colorS = 60
            this.colorL = 70


            allArea.push(this)
        }
        checkOther(x,y,myID){
            for(let [i,otherArea] of allArea.entries()){

                if(otherArea.id !== myID){
                    let otherX = otherArea.x;
                    let otherY = otherArea.y;
                    let dis = Math.sqrt([x-otherX]**2+[y-otherY]**2)
                    if(dis>50 && dis < 150 ){
                        line(x,y,otherArea.x,otherArea.y)
                    }else if(dis < 10){
                        this.combineCD --
                        if(this.combineCD === 0){
                            this.combine(myID,allArea[i].id)
                        }
                    }
                }

            }
        }
        color(){
            let color = [this.colorH,this.colorS+Math.random()*10-5,this.colorL+Math.random()*10-5]
            return color
        }
        people(){
            if(this.birthRate > this.deathRate){
                if(rate(this.birthRate-this.deathRate)){
                    let l = rNF(this.l)
                    let ang = rNF(360)
                    let cX= this.x + l*Math.cos(ang)
                    let cY = this.y + l*Math.sin(ang)
                    let pt = {x:cX,y:cY,belong:this.id}
                    allPt.push(pt)
                    this.popCount++;
                    this.newPeople.push(pt)    
                    // noFill();
                    strokeWeight(3);


                    ellipse(pt.x, pt.y, dotSize)

                    this.checkOther(pt.x,pt.y,this.id)
                    this.develop()

                }else{
                    this.deathCount++
                    return {x:this.x,y:this.y}
                }
            }else{
                lo('people negative growth')
            }
        }

        trend(){
            let lArr = []
            for(let i of allArea.values()){
                lArr.push(i.l)
            }
            let bigL = Math.max(...lArr)
            let bigAreaIndex
            for(let [i,area] of allArea.entries()){
                if(area.l === bigL){
                    bigAreaIndex = i
                }
            }

            let [tX,tY] = [allArea[bigAreaIndex].x,allArea[bigAreaIndex].y]

                this.x += [tX-this.x]/50
            this.y += [tY-this.y]/50
        }
        combine(a,b){
            lo("融合了!")
            this.conbinedCount ++
            this.combineCD = 2*this.conbinedCount
            let areaAIndex,areaBIndex
            for(let [i,area] of allArea.entries()){
                if(a === area.id){
                    areaAIndex = i
                }
            }
            for(let [ii,area] of allArea.entries()){
                if(b === area.id){
                    areaBIndex = ii
                }
            }
            let [areaA,areaB] = [allArea[areaAIndex],allArea[areaBIndex]]
            lo(areaA)
            lo(areaB)

            if(areaA.x>areaB.x){
                let newX = [areaA.x-areaB.x]/2;
            }else{
                let newX = [areaA.x-areaB.x]*-1/2;
            }

            if(areaA.y>areaB.y){
                let newY = [areaA.y-areaB.y]/2;
            }else {
                let newY = [areaA.y-areaB.y]*-1/2;
            }


            strokeWeight(3);
            ellipse(this.x,this.y,100)

            this.l = [this.l+areaB.l]/2
            this.popCount += areaB.popCount
            this.birthRate = [this.birthRate+areaB.birthRate]/2
            this.deathRate = [this.deathRate+areaB.deathRate]/2*1.5
            this.developCount = 0;
            this.bearing = [this.bearing+areaB.bearing]/2
            this.deathCount += areaB.deathCount
            let l = rNF(this.l)
            let ang = rNF(360)
            let cX= this.x + l*Math.cos(ang) + l *1.5
            let cY = this.y + l*Math.sin(ang) + l *1.5

            // areaB.x = cX
            // areaB.y = cY
            // areaB.l = this.l*0.3
            // areaB.popCount = 0
            // areaB.birthRate = this.birthRate*1.5
            // areaB.deathRate = this.deathRate
            // areaB.developCount = 0;
            // areaB.bearing = this.bearing*1.5
            // areaB.deathCount = 0
            // areaB.conbinedCount = 0
        }
        develop(){
            if(this.newPeople.length>this.bearing){
                this.developCount++
                this.x += rNF(10)
                this.y += rNF(10)
                this.l += rNF(10) 
                this.newPeople.splice(0,Math.floor(this.bearing)) 
                this.bearing = this.l**2/100
                // lo(`${this.id} have developed: ${this.developCount} times`)
                // lo(this.bearing)
                this.trend()
            }

        }

    }

    for(let pt of allPt.values()){
        pt.x
    }

    let isClick = true
    let dot,
        dotSize = 10
    let areaA,areaB,areaC,areaD,areaE,areaF,areaG
    let locA
    let h,s,l,c
    let w,vh
    let center


    function setup(){
        createCanvas(window.innerWidth,window.innerHeight);
        [w,vh]= [windowWidth,windowHeight]
        background('#eee')
        frameRate(150)
        center = (x)=>{
            return Math.random()*x
        }
        // noStroke()
        locA = new specLoc(center(w),center(vh),100)
        areaA = new Area('aA',center(w),center(vh),100)
        areaB = new Area('aB',center(w),center(vh),200)
        areaC = new Area('aC',center(w),center(vh),50)
        areaD = new Area('aD',center(w),center(vh),150)
        areaE = new Area('aE',center(w),center(vh),350)
        areaF = new Area('aF',center(w),center(vh),70)
        areaG = new Area('aG',center(w),center(vh),120)
    }

    function mouseClicked(){
        if(!isClick){
            isClick = true
            console.log(allArea)
        }else{
            isClick = false
        }
    }

    function draw(){
        
        if(isClick){

            [h,s,l]=[...areaA.color()]

            areaA.people()
            stroke('#ED2E4C')

            areaB.people()
            areaF.people()
            stroke('#287CED')

            areaC.people()
            stroke('#E16562')

            areaG.people()
            areaD.people()
            stroke('#2A39ED')

            areaE.people()
            stroke('#2A39ED')
            


            
        }
        
        
    }
    
    

