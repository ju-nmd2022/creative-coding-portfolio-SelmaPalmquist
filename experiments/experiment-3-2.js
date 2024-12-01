//flow fields will go here? https://www.youtube.com/watch?time_continue=745&v=R0OFyWEglGA&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dhow%2Bto%2Bmake%2Bflow%2Bfields%2Bdraw%2Barcs%2Binstead%2Bof%2Blines%2Bp5%26sca_esv%3Df9439907e5543505%26sxsrf%3DADLYWILSdCm&source_ve_path=MTM5MTE3LDEzOTExNywxMjcyOTksMTM5MTE3LDEzOTExNywxMzkxMTcsMTM5MTE3LDEzOTExNywxMzkxMTcsMTM5MTE3LDEzOTExNywxMzkxMTcsMjM4NTE
function setup() {
createCanvas(1000,1000);
colorMode(HSB, 360, 120, 100, 25);
background(0);
strokeWeight(3);
resolutionAngle = 0.03;
resolutionColor = 0.002;
gap = 15;
length = 8;

for (i=0; i < width; i += gap){
    for (j=0; j < height; j += gap){
        noise2 = noise(i * resolutionColor, j * resolutionColor);
        h = floor(noise2*5)*72;
        stroke(h, 90, 90, 150);
        x = i;
        y = j;
        
    for(k=0;k<10;k++){
        noise1 = noise(i * resolutionAngle, j * resolutionColor);
        angle = noise1 * PI * 2;
        newX = sin(angle) * length + x;
        newY = cos(angle) * length + y;
        line(x,y,newX, newY);
        x = newX;
        y = newY;
        }
    } 
}
}

