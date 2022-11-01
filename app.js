console.log('yo')

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

//STUB drawing
function drawPackages() {
    let lineUpElm = document.getElementById(package - lineup)
    let template = ''
    names.forEach()
}

function drawNames(names) {
    let lineUpElm = document.getElementById(package - lineup)
    let template = ''
    names.forEach(name => template += name.to)
    lineUpElm.innerText = template
}

function drawEveryone(names) {
    drawNames(names)
}

//STUB functions
function sortWeightLightToHeavy() {
    let LightToHeavy = packages.sort((packageA, packageB) => packageA.weight - packageB.weight)
    console.log('Light to heavy', LightToHeavy);

}
function sortWeightHeavyToLight() {
    let HeavyToLight = packages.sort((packageA, packageB) => packageB.weight - packageA.weight)
    console.log('Heavy to light', HeavyToLight);
}

function filterIsExpress() {
    let Express = packages.filter(package => package.priorityLevel == 'express')
    console.log(Express);
}

function filterIsFragile() {
    let fragile = packages.filter(package => package.isFragile == true)
    console.log('fragile:', fragile)
}