function CurrentTime() {
    let time  = new Date() ; 
    const monthList =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ;
    return {
        date : time.getDate() ,
        month : [monthList[time.getMonth()],time.getMonth()],
        year : time.getFullYear()
    }
}

module.exports = CurrentTime;