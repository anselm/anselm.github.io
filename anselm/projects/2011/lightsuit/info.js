const lightsuit = `

# MAKERLAB: Project #8 
LIGHTSUIT, Wearable Fashion Prototypes

Introduction

See https://www.flickr.com/photos/anselmhook/6120808393/in/photostream

(The Makerlab Lightsuit first test)

## Light as fashion

People have started to wear lights as a form of fashion. Like most fashion it is used to accentuate parts of the body. This essay discusses the work that we did building a light suit and wearing it to Burning Man 2011, the reactions we got, the technical challenges and some of our observations on the topic.

Any circa 2011 lightsuit is by necessity a crude approximation of future fashion. By 2012 this kind of technology will be common. By 2020 there will no longer be any novelty to embedded lights in one’s attire. (ways that lights will be incorporated into clothes- fashion (decorative, trends), sport (measurement, protection), utility( safefty, alerts), functional(social, intimate notifications)

Nevertheless our early work is likely in line with future perceptions of similar technology.

A light suit is in a sense a vulgarity - like smearing makeup all over your body as a means to gauge the cultural response to adornment. It explores fashion in the same crude way that the Linear Hadron Collider explores the sub-atomic universe; by the brute force smashing of things together and seeing what spins out.

There is a Donna Haraway moment in this as well. Why wrap myself up in lights? What is it about some new technological artifact that makes me ( and others ) want to roll in it? The suit is a text - the lights sequence patterns and communicate. There are a series of statements made both explicit and implicit. Statements about identity, how I define and see myself, how others respond. How ego and simian preening are folded together by a new technical fetish.

## Critical Fashion?

(Arren Parker’s fur light coat)

There is a deep seated somewhat unconscious appeal to covering oneself with lights - it’s as if the body is a text and one is forming a critical interpretation of the body. It’s a kind of exegesis - trying to draw out an understanding ; by necessity a reduction of the real to a simplified truth. What makes this most interesting is that it says more unintended things than intended things. It says a lot about identity, pride, self. It speaks to our simian nature and ego. It’s almost a hopelessly naive conflation of technology with self - almost a cargo culting of technology - as if one is somehow faster, better, more desirable, fertile - because of a techno fetishistic sheathing. It speaks to a desire to please as well. And it speaks to a body dimorphism - this arms length cultural stance we have with respect to our bodies in the modern age.

Even the quantity and placement of lights is in question; should one emphasize the genitalia? Should one emphasize the gross musculature; calves biceps chest? Should the lighting itself reflect a gender neutral body or should it be masculine or feminine? Lighting clearly becomes fashion - as a way to bend representation. In the truest sense it is bling; if lights are a currency of the Burning Man culture then more lights is more wealth.

Fidelity of control over the lights; the specific lighting effects - the uses of the lights - the new manners ( when is it appropriate to turn the lights off or on? what are appropriate visual sequences to run on the suit at certain moments? Is it appropriate to run the lights during say a sombre moment such as Temple Burn? Is there an obligation to run the lights if somebody asks? ).

http://www.stanford.edu/dept/HPS/Haraway/CyborgManifesto.html
http://www.ruthnestvold.com/cyberspace.htm
http://archive.unu.edu/unupress/unupbooks/uu37we/uu37we07.htm
http://www.counterbalance.org/rjr/femin-body.html

## Human Anatomy

It turns out that placing lights closely on the body is an intersection of studies in anatomy with limits of the lights wiring hardware and trying to manage the complexity of mapping the lights to software.

Paige acted as a model for the suit. She was rigged in a black unitard with white circles used to mark the light placements.

In defining exactly where the lights were going to be placed many specific issues arose with respect to lighting budgets, light distribution, physical comfort. We had to develop an improved vocabulary of the human body in order to specifically be able to communicate and express which parts of the body we were referring to ( the arm? or the upper arm? the upper arm front or the upper arm back? ).

We also had physical hardware limits such as cable strand lengths which interacted with our ideal placement patterns - such that the ultimate lighting placement was a compromise between physical limits and design aspirations.

Since the light budgets were limited the lights could be placed randomly or be placed to accentuate body features. The latter method was chosen - but then this required an artistic interpretation; sketches and working with a human model to decide on light placement. The act of wrapping a human with a limited light budget became a kind of game - not dissimilar from http://zenbound.com - and it was reminiscent of bondage and binding in general. The body yields to a form of control that inhibits its freedom by degrees in either increasingly pleasurable and or painful ways.

http://en.wikipedia.org/wiki/Human_anatomy
http://en.wikipedia.org/wiki/File:Human_anatomy.jpg
http://ask.metafilter.com/58928/What-is-the-proper-anatomical-term-for-the-top-of-your-foot
http://julieyumi.tumblr.com/post/491663383/surprise-surprise-did-you-know-that-every-part

## Lighting Budgets

I worked out an initial plan with very specific lighting budget placements. Ultimately I had to simplify and revise this plan to always group limbs or sections into blocks of 50 ( since the lights came in groups of 50 ).  Here were my original budgets and design goals

total is 250 per side
roughly split evenly over limbs and parts of the body
accentuate body by arranging lights to emphasize frame and muscle
leave spine itself free to lean on things
leave bum free enough to sit
leave inner legs free to walk
leave inner arms free to swing arms
delineate spine on back without blocking sitting and leaning
delineate chest and increase budget there to indicate pectoral muscles
have more budget on upper body than lower since it is higher off ground and more visible
delineate belly button, nipples and pelvis
curve to accentuate leg muscles

left front arm upper outside humerous
20
left back arm upper inside
.
left front arm lower outside forearm 
20
left back arm lower inside
.
left front hand outside top
20
left back hands inside palm
.
left front head hood sides / mohawk
20
left head hood back
.
left front shoulder epaulets
10
left back shoulder epaulets
10
left front upper chest
20
left back shoulder wing
20
left front center line thorax
.
left back spinal ridge
10
left front abs
10
left back thorax lumbar
10
left front hip 
10
left back hip buttock glutes
10
left front leg upper quad
15
left back leg upper hamstring
10
left front leg lower shin
10
left back leg lower calf
10
left front foot top dorsal
.
left back foot bottom
.
totals ( 250 max )
160


80



## Revised Lighting

I had to simplify and get things tractable fast - my revised plan was:

Arrange in strips of say 5 x 10 or thereabouts - whatever seems best
Max 300 lights due to Arduino RAM limits
Separated top and bottom so I can pee
Regularized strips so I can map to software faster.
Multiples of 50 per segment ( arm, leg, chest, back )
Sew to attach.




## History

How this all came about was a series of happy accidents.

In late July Mike Winter and Will Wright from Stupid Fun Club dropped by our offices at Parc to see what we were doing with Augmented Reality. It was a pleasure to show them around and Mike extended an invitation for us to come up and visit them. I took advantage of this and came to check out their lab - and in doing so I heard that they were doing a lighting project for Burning Man. I definitely wanted something to do ( rather than just consume ) so I dropped by the http://coolneon.com office in early August to see the project - the Serpent Twins. Turns out they had just got a new lighting product which they called “Total Control Lighting” and it seemed like they were having a lot of fun with it.

Learning just enough about the Arduino I managed to get started on something that very first evening. Doing a suit seemed like the obvious simple thing to do - it was my first thought. From there it was simply an issue of working through software, budget, hardware and power management issues. I went through two entire suit revisions but all in all it was quite manageable. Possibly the biggest risk and most time consuming portion was simply physical light placement and attachment to the suit - more so than software or power management considerations. It could easily have been an out of control project in that I didn’t know until the last day if everything was going to work - but everything did seem to work well. I really have to thank Benjamin and Mike for their help in answering simple questions I had which otherwise would have been big roadblocks for me.

## Suit Hardware and Power

The hardware I started using is the

http://www.arduino.cc/en/Main/ArduinoBoardDuemilanove which accepts an ideal input voltage of 7~12v and presumably steps this down to 5v for on board use.
6 Light Strands with 50 lights each. The Cool Neon site says that each strand of 50 wants 1.0amps at 5vdc. With 6 strands that is 6amps. The batteries I have are 6vdc and 7.5amps.

I changed to a Seeeduino and I bought a 6V 5amp battery ( for an RC car ). To power the lights directly ( not via the arduino ) I basically tap out the Red and Blue cables for power where Red is +5V and Blue is ground. Apparently it is important to make sure there is a common ground between the Arduino and Light Strands. See:

http://www.idolstarastronomer.com/Home/char-total_control_lighting

If you are running the Arduino on USB power or using an external battery or adapter, but running the Total Control Lighting strand with an additional 5V source then connect only the Ground line of the Total Control Lighting strand or T-connector to a Ground pin of the Arduino. Leave the +5V Total Control Lighting line disconnected from the Arduino.


## Ideal effects sequencing

This plan was obsoleted by the severe memory limits of the Arduino. I’d like to bring it back to the foreground if I go with a more powerful computer such as an iPhone.

Roughly speaking I’d like to see effects like this:

Very very fast effects and very very slow moving and subtle effects
Effects that delineate the body; legs, torso, arms
Blur, Fade, Jitter, Red/Blue 3d effects applied to entire skin.
Multiple effects simultaneously
Effects sensitive to the world; orientation, foot placement, music.
Bars that move horizontally or vertically or at angles
Shapes that move around the skin, expand, contract, pulse, rotate.
Fire walking
Text and graphics; hearts etc.
Chameleon blending into the background using a camera
Random sparkles
The ability to sequence effects over time
The ability to composit effects together so ones output is modified by another
Effects that transition; such as a firework that flys up then explodes
Effect duration, attack, sustain, decay and overall volume
Bounce off walls

I struggled with a variety of mental models for how to represent effects. This included playing around with Blender ( loading up a virtual human and then making a simpler one with a reduced polycount ) and playing around in Processing ( loading the reduced polycount model and testing lighting effects with polygons using per vertex shading ).

Ultimately I felt that my effects were moving objects - so I thought I would have a base class that embodied basic physics; momentum, inertia, friction, position and suchlike. Then subclasses could introduce variations. The effects engine therefore is like a particle effects engine .

## Simplified Effects Sequencing

The source code for the suit is at http://github.com/anselm/lightsuit .

I decided to treat the skin as a 2d bitmap and built an adjacency graph of the light positions.

I only have one effects loop that visits every single pixel in the display once and each effect can act on that pixel at that time if it wishes... this is the inverse of the normal reasoning but for effects that are global it is fastest.

Each effect was an independent pre-canned animation sequence which I composited together onto the suit.

Each effect is totally custom and no state is shared - there is no chaining or fancy effects support.

No effects are animated movies - all effects are dynamically procedurally generated. It would be nice to run movies also later.

## Arduino Limits

The Arduino is limited for small app development - it would be far better just to use an ordinary cellphone by some measures - it is very slow, very little RAM, no sensors. An iPhone by comparison has all kinds of sensors built in, tons of ram, lots of user interface capabilities. If I could hook up an iPhone to the SPI interface for driving the Light Strands that would be more ideal.

I rapidly hit memory and speed issues and had to re-structure my application as a result - in particular the color mapping table of the lights to an actual 3d position had to be optimized. Rather than generating the light placements by literally drawing strands to memory I ended up having a static 2d color lighting map for. It was a more elegant solution but less configurable.

I also can only handle 300 lights in the current RAM configuration - so this has meant I will not include a hood in this design.

I had switched to a Duemilanove Arduino but switched back to a Seeeduino for speed and performance ( having to debug some issues with the Seeeduino more carefully ).

http://seeedstudio.com/wiki/Seeeduino_Mega ( 8k RAM, 16mhz crystal )
http://www.arduino.cc/en/Main/ArduinoBoardDuemilanove  ( 2k RAM, 16mhz crystal )

## Hardware Parts and Labor

$1100 for 11 Light Strands ( but I ended up only using 6 of these )
$32 for 2 large batteries (but it turns out a single 9v battery can power the whole system)
$80.00 One Arduino - http://www.arduino.cc/en/Main/ArduinoBoardDuemilanove . I also had a Seeduino but it seemed to not be working so I fell back to this older board.
$80.00 Arduino WIFI Shield from Sparkfun ( so I can hook up an iPhone to the system ).
$180.00 Yoga Top and Bottom from Luluemon Athletica..

I think this took about 10 days full time to build including software.

## Human Factors Perceived Light Intensity

The LED’s can be set from 0 to 255 in brightness but this is not an even distribution across the human eye in terms of perceived brightness. For performance reasons I didn’t end up using this translation table but for future reference I’ve included it here.

See this link for more details:
 http://blog.makezine.com/archive/2011/08/arduino-cookbook-excerpt-large-tables-of-data-in-program-memory.html

#include <avr/pgmspace.h>  // needed for PROGMEM

// table of exponential values
// generated for values of i from 0 to 255 -> x=round( pow( 2.0, i/32.0) - 1);

const byte color_normalize[]PROGMEM = {
   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
   0,   0,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   2,   2,   2,   2,   2,
   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   3,   3,   3,   3,   3,   3,
   3,   3,   3,   3,   3,   3,   4,   4,   4,   4,   4,   4,   4,   4,   4,   5,
   5,   5,   5,   5,   5,   5,   5,   6,   6,   6,   6,   6,   6,   6,   7,   7,
   7,   7,   7,   8,   8,   8,   8,   8,   9,   9,   9,   9,   9,  10,  10,  10,
  10,  11,  11,  11,  11,  12,  12,  12,  12,  13,  13,  13,  14,  14,  14,  15,
  15,  15,  16,  16,  16,  17,  17,  18,  18,  18,  19,  19,  20,  20,  21,  21,
  22,  22,  23,  23,  24,  24,  25,  25,  26,  26,  27,  28,  28,  29,  30,  30,
  31,  32,  32,  33,  34,  35,  35,  36,  37,  38,  39,  40,  40,  41,  42,  43,
  44,  45,  46,  47,  48,  49,  51,  52,  53,  54,  55,  56,  58,  59,  60,  62,
  63,  64,  66,  67,  69,  70,  72,  73,  75,  77,  78,  80,  82,  84,  86,  88,
  90,  91,  94,  96,  98, 100, 102, 104, 107, 109, 111, 114, 116, 119, 122, 124,
 127, 130, 133, 136, 139, 142, 145, 148, 151, 155, 158, 161, 165, 169, 172, 176,
 180, 184, 188, 192, 196, 201, 205, 210, 214, 219, 224, 229, 234, 239, 244, 250
};

## Future Goals

A few things I’d like to do in the future:

I’ve purchased an Arduino Wifi Shield so that I can drive the Arduino more fully from say an iPhone.
There’s also an argument that I should hook up an SPI interface directly to the iPhone and bypass the Arduino completely ( this would give me access to all of the iPhone’s sensors more easily so that I could detect ambient light and sounds and acceleration as well as having more memory and computational performance to build interactive effects ).
A few technical issues make the Arduino itself less and less appealing - one of which is that the SPI interface would have to be faked at a speed penalty using “SPI Bit Banging” if I want to also run the WIFI on it. I’d like to research the best way around this.
I’d like to do dynamic human limb positioning so that I could move my arms and legs and have the lighting effects know where those body limbs are.
I did build a small simulation of the suit in Processing - this should be elaborated on.
There are many technical detals regarding color blending - and the color model should be improved to reflect this.
The LED’s do not get brighter or dimmer at a human perceived rate exactly; there needs to be a table that maps the lighting to a human perceptual model.
I built a model in Blender 3D of a human body - I’d like to use that to improve the simulation so that it looks more realistic.

## Reactions

My own experiences wearing the suit:

It was comfortable and warm and manageable once on. The power management and battery belt harness worked well after some initial reworking. A waist belt was added for support and this helped keep the larger battery pack in place and keep the leggings up. It was difficult to put on and to remove without damaging the suit but once on it was quite comfortable and wearable. It was warm on cold Playa nights.
The suit got very powerful reactions from almost every person.
The simplest brightest effects got the best reactions. The most powerful reactions were from wearing the test lighting pattern ( a rolling blue ‘lighthouse’ effect and a vertical red ‘falling’ effect ). More complex and subtle patterns failed to elicit strong reactions.
People often ran across the desert to intercept me while wearing the suit.
Many folks were extremely interested in, and familiar with, technical details such as the arduino and the like. Almost universally the younger women and men were tech saavy - and would knowingly shout out “Arduino?” and the like - it was clear that there is a technical saturation in this community.
The suit was a raver trap. Many kids wanted to hug me - it was really sweet and fun actually. Sometimes I would be mobbed by 20 or 30 people who wanted to hug me at the same time - which became kind of scary and I occasionally started to worry that I might get crushed or might not be able to get away. The suit was especially attractive to younger ravers who were likely high on Ecstasy or other drugs that made them want to be physically in contact rather than just look at something. I had quite a few younger men and women asking if it was ok to get a hug. Often I’d have some radiant youthful face shining with pure and simple excitement running up to me asking about the whole thing. Older people mostly seemed to just want a picture with the suit - they were more conservative although more effusive with words.
There was an effect of being an instant rock star; or instant celebrity - this was slightly disconcerting but could be stopped at any time by simply turning off the lights.
People were most excited by motion. If I ran or walked swiftly I would get a chorus of oooohs and aaahs from across the Playa and from various art-cars full of people dancing as I strode past. If I started dancing or approached a group that was dancing and joined in they were very happy with the whole idea and it was remarkably warm and welcoming; kind of fun in a participatory sense - not as if something uncomfortable or weird had just entered their world - but rather as if Burning Man itself was personified and had joined in.

Overall, superficially, it was quite a bit of good clean fun - and while wearing it I definitely felt like I was contributing to Burning Man - not just consuming. At the same time it was a lot of work - it was heavy, and tiring and in a sense a job not just play. It was also wonderful running into other people with similar projects in various stages of completion and sharing our interest in the whole idea. I think most people saw the humor in it - the cartoonish aspect of being over the top with the number of lights - and it was fun making people smile.

##Links

This I think reflects where I’d like to go - it’s the current state of the art https://vimeo.com/30637945 
This is a site that will apparently be up soon - I ran into these folks at Burning Man http://lightsuit.org
"an original light suit was constructed using hundreds of feet of high-voltage LED rope lights and ..." http://vimeo.com/9697968
http://blog.makezine.com/archive/2011/09/etfled-wireless-flexible-wearable-display-video.html Erik Johnson made these flexible, wearable LED panels. The animations are controlled over wifi with a mobile device, and Erik brings light-refracting glasses with him to show off the trippy fireworks-like effects. He fit in perfectly in the dark hall filled with luminescent projects at Maker Faire Bay Area 2011.
http://www.engadget.com/2010/09/03/iphone-controlled-led-suit-is-actually-not-going-to-burning-man/ Here’s a very similar project that was very competently executed last year. It’s the closest to my own work.
http://www.youtube.com/watch?v=wSnSzFMis1I Here is a partial suit with low fidelity.
Some humor around the topic has already emerged. http://www.abluestar.com/blog/led-light-bulb-suit/
http://anthrolume.wordpress.com/2011/09/05/the-burn-a-success/#comment-12 this was a very similar project - and I actually ran into him in on the Playa a few times. Great fun!
http://www.coolneon.com/2011/08/14/total-control-lighting-projects-debuting-at-burning-man-2011/ These are the folks who provided the technology I used - there were other projects using the same hardware.

## Contributors

Mike Winter of Stupid Fun Club and Benjamin James of Cool Neon provided original inspiration and motivation to do the work. They also provided key technical support in terms of understanding issues such as power management, the SPI interface used to drive the lights and programming the Arduino. Benjamin James owns http://coolneon.com which provided the brand new lighting technology that actually made the suit possible.
Jennifer Hernandez of the Fandango Camp sewed the lights to the suit. She spent several days full time doing this back-breaking work on short notice for our second rev of the suit which we had to redo from scratch days before the first showing.  On the last day she did nearly 24 hours of sewing non stop. Without her help this would not have succeeded and many thanks go in her direction.
Paige Saez was the model for the suit lighting placements and together with Anselm specified the overall concept and design. Paige and Anselm run http://makerlab.com which is a design and fabrication incubator specifically for projects like this.
Anselm Hook of Parc programmed the suit and led the work.

Many other people helped out with time, materials, support and ideas as well including Nifer Fahrion, Jason Wilson, Chacha Sikes, Diann Eisnor, Meredith Andrews, Todd Huffman for letting me store it in his air-conditioned trailer at Burning Man. Their support and help also helped make this work a success. My employer Parc was gracious in supporting time off for showing the suit at Burning Man 2011 as well.

	`

export const anselmProjects2011LightsuitPost = {
  id: '/anselm/projects/2011/lightsuit/post',
  slug: '/anselm/projects/2011/lightsuit/post',
  type: 'post',
  title: 'Lightsuit',
  content: lightsuit,
  depiction: '/anselm/projects/2011/lightsuit/6121389208_28413e12f8_c.jpg',
  parentId: '/anselm/projects/2011/lightsuit',
  sponsorId: '/anselm',
  tags: ['projects', 'wearable', 'led', 'burning-man'],
  createdAt: '2011-01-11T11:00:00.000Z',
  updatedAt: '2011-01-11T11:00:00.000Z'
};
