// Code your solution in this file!

function distanceFromHqInBlocks(block){
    const hQLocation = 42
    const blocks = (block >= hQLocation) ? (block - hQLocation) : (hQLocation - block)
    return blocks
}


function distanceFromHqInFeet(block){
    const hQLocation = 42
    const distanceInFeet = (block >= hQLocation) ? ((block - hQLocation)* 264) : ((hQLocation - block) * 264)
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
    const distanceTravelled = (start >= destination) ? ((start- destination) * 264) : ((destination - start) * 264)
    return distanceTravelled
}

function calculatesFarePrice(start, destination){
    if (((start - destination) * -264)>=1 && ((start - destination) * -264) <= 400) {
        return (start - destination) * -0
    } else if (((start - destination) * 264) >= 400 && ((start - destination) * 264) <= 2000){
        return (((start - destination) * 264) - 400) * .02;
    } else if (((start - destination) * -264) >= 2000 && ((start - destination) * 264) <= 2500){
        return (start - destination) * -3.125;
    } else {
        return 'cannot travel that far'
    }
}
