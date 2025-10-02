// Static entities for Anna Hook's art portfolio
// These entities organize the HTML content into a hierarchical structure

export const annaRoot = {
  id: 'anna-root',
  slug: '/anna',
  type: 'group',
  parentId: 'root-group',
  title: 'Anna Hook Art Collection',
  content: 'A collection of greeting cards, artwork, and writings by Anna Hook',
  view: 'list',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const annaCards = {
  id: 'anna-cards',
  slug: '/anna/cards',
  type: 'group',
  parentId: 'anna-root',
  title: 'Annabella Cards',
  content: 'Greeting cards featuring butterflies, birds, and nature themes',
  view: 'grid',
  depiction: '/anna/art/g11.jpg',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const annaAntifur = {
  id: 'anna-antifur',
  slug: '/anna/antifur',
  type: 'group',
  parentId: 'anna-root',
  title: 'Anti-Fur Drawings',
  content: 'Ink drawings in support of banning the use of furs',
  view: 'grid',
  depiction: '/anna/art/a1.jpg',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const annaWritings = {
  id: 'anna-writings',
  slug: '/anna/writings',
  type: 'group',
  parentId: 'anna-root',
  title: 'Writings',
  content: 'Personal essays and reflections',
  view: 'list',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

// Individual card designs
export const cardEntities = [
  {
    id: 'anna-card-birds',
    slug: '/anna/cards/birds',
    type: 'post',
    parentId: 'anna-cards',
    title: 'The Birds Collection',
    content: 'Elegant bird illustrations in various styles',
    depiction: '/anna/art/g04.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-card-butterflies',
    slug: '/anna/cards/butterflies',
    type: 'post',
    parentId: 'anna-cards',
    title: 'Butterfly Collection',
    content: 'Colorful butterfly designs, hand-colored for small orders',
    depiction: '/anna/art/g11.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-card-panda',
    slug: '/anna/cards/panda',
    type: 'post',
    parentId: 'anna-cards',
    title: 'Panda Card',
    content: 'Black and white panda illustration, popular when the Panda visited Calgary from China',
    depiction: '/anna/art/g01.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-card-penguins',
    slug: '/anna/cards/penguins',
    type: 'post',
    parentId: 'anna-cards',
    title: 'Penguin Collection',
    content: 'Charming penguin illustrations',
    depiction: '/anna/art/g03.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-card-tiger',
    slug: '/anna/cards/save-the-tiger',
    type: 'post',
    parentId: 'anna-cards',
    title: 'Save The Tiger',
    content: 'Oil painting postcard to raise awareness about the plight of the tiger',
    depiction: '/anna/art/p1.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Black and white ink cards
export const inkCards = [
  {
    id: 'anna-ink-chess',
    slug: '/anna/cards/chess-game',
    type: 'post',
    parentId: 'anna-cards',
    title: 'The Chess Game',
    content: 'Copyright by Anna Hook, 1978. Intricate chess-themed illustration.',
    depiction: '/anna/art/chessgamesml.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-ink-jewels',
    slug: '/anna/cards/jewels',
    type: 'post',
    parentId: 'anna-cards',
    title: 'The Jewels',
    content: 'Copyright by Anna Hook, 1990. Detailed ink drawing.',
    depiction: '/anna/art/jewels.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-ink-metamorphosis',
    slug: '/anna/cards/metamorphosis',
    type: 'post',
    parentId: 'anna-cards',
    title: 'Metamorphosis',
    content: 'Copyright by Anna Hook, 1988. Evolution-themed artwork.',
    depiction: '/anna/art/morph.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-ink-xmas',
    slug: '/anna/cards/christmas',
    type: 'post',
    parentId: 'anna-cards',
    title: 'Christmas Card',
    content: 'Holiday card with decorations in bright colors',
    depiction: '/anna/art/xmascard.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Anti-fur drawings
export const antifurDrawings = [
  {
    id: 'anna-antifur-1',
    slug: '/anna/antifur/drawing-1',
    type: 'post',
    parentId: 'anna-antifur',
    title: 'Anti-Fur Drawing 1',
    content: 'Ink drawing advocating against fur trade',
    depiction: '/anna/art/a1.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-antifur-2',
    slug: '/anna/antifur/drawing-2',
    type: 'post',
    parentId: 'anna-antifur',
    title: 'Anti-Fur Drawing 2',
    content: 'Powerful illustration showing the reality of fur trade',
    depiction: '/anna/art/a2.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-antifur-3',
    slug: '/anna/antifur/drawing-3',
    type: 'post',
    parentId: 'anna-antifur',
    title: 'Anti-Fur Drawing 3',
    content: 'Two for the road - Anti-fur advocacy art',
    depiction: '/anna/art/a3.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-antifur-4',
    slug: '/anna/antifur/drawing-4',
    type: 'post',
    parentId: 'anna-antifur',
    title: 'Anti-Fur Drawing 4',
    content: 'The fur is for... - Thought-provoking illustration',
    depiction: '/anna/art/a4.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-antifur-5',
    slug: '/anna/antifur/drawing-5',
    type: 'post',
    parentId: 'anna-antifur',
    title: 'Anti-Fur Drawing 5',
    content: 'Powerful anti-fur message through art',
    depiction: '/anna/art/a5.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const AnnaEssayChildhood = `# Childhood Memories

When I think about the stages of my life, childhood, youth, maturity, etc, it seems to me that childhood was different from that of most people, even if most people say exactly the same. We were very poor, the 4 of us, I, my parents, my brother, in those distant years, 1946~8, etc, it was right after the war, and my parents were not get along at all; little did it matters. What did I have then, in my childhood. Everything that really counts, and more.

## Total Freedom

I had, to begin with, total freedom. When I see kids brought up to school, brought back, playing in enclosed space, a backyard, a schoolyard, facing homework or setup duties, installed in front of pre organized amusements, involved under supervision in children parties, and birthdays, I see how unlimited is the difference with my childhood. There was no TV, no children parties, did they remember my birthday...maybe, but there were no presents....

I am sure of that; too busy fighting or raising some $ anyhow... Like I said, those were hard times, in Italy, right after the war. My dad is a veterinarian, he is quite old now, over 75, and he was one of the main authorities in the small tow.. It is pretty much this way, I think, in every small town : there's doc,( n.1 ) the lawyer, the vet , the teachers. Plus the priest.

## The Big Building

Where I lived, my home, that's the beauty. It was a very small town, in the middle of farms of cherries, peach trees, wine yards, etc, etc... the town has his cobble stones small streets, his huge church you got to after a flight of stairs, and in the middle of everything , there was this very huge building. If you can picture this, a large town square, a long stairway that goes up to the church ,on the right, and the big building in front of you, on the left a park, then, you got it all.

This is were I lived, in the big building, this was home; this is where everything was, to be sure; the bank, as soon as you enter the front door, the long corridor going to my apartm. , on the left, the museum, various offices, all this on the main floor; and, here you go, the schools, upstairs..

We lived there because my dad was a civil servant, and others kids lived there too, upstairs, just above me.... To go school, we run up the stairs.

## After School Adventures

After school was over, I think there were 2 or 3 rooms where everyone was packed, more or less, in different grades, while most of the kids went home, we stood, because that's when the real fun began. Writing obscene words on the blackboard, throwing stuff around, making faces at the absent teacher, you name it...You see, I was everything but alone. There were always a 4 or 5 of us at any given time. My fights with Anita, the girl from upstairs, were proverbial ; we pulled each other hairs in the square, and everyone had to separate us. It was her fault, of course; then, there was always the chance the museum was left open by mistakes. No, you could not even touch the precious stones, they were firmly under glass, but how shining and beautiful they were. The .. was the winner, and the man in the armor suit. . There was this incredible middle age armor watching over the whole building at the very entrance of the museum. Of course, we were not allowed in there, and if by any chance they ever saw us, the chase started to kick us out. The museum was always closed, left open just by mistake or for cleaning. No problem. Out we went.. The hunt for little lizards was always open. The way I remember it, it was always warm and summer and there were millions of little lizards.

The girls were supposed to stop the boys from killing them, but I am not too sure; I know I liked the lizards, and saved them as much as I could; but nobody could never catch them anyhow. From the rocks to the school, to hide and seek trough the all building, and once a week, the church.. Oh those confessions...I said bad words, I pulled Anita's hair, I stole some money.....The old priest was white haired, and took me in his laps, he was not supposed to, but this is another world I am moving in...so, what did you do bad today Anna...and I was saved, I was, always was, after 2 or 3 little Ave Maria...I was saying them in the semi dark bench, among the imposing paintings on the walls and the stoned silence...I was making sure not to miss any, I may have been watched, after all... then out the stairs I run, light as a feather, happy as a lark, saved in this world and in heaven too...saved, saved. Good for another week, another week of sinning...

## Town Excitements

Then, there was excitement in the small town: the Chaplin movies, we all went, I remember, it was mandatory, it was Chaplin, the only one, Charlot, the French called him, you had to go, as for confession, but it was better. . Then, the gypsies arrived, every year, punctual as the hirondelles......if you no good, they'll kidnap you..and we were wondering.. was the child that this young gypsy was nursing really her's or had it been stolen...and from where?. they were not staying long in our small town, camping somewhere outside and moving on ..that's what gypsies do, we were told......start fires, steal children that are no good, and never work....but how pretty the floral dresses the women were wearing were.. how romantic all this was, always on the go...from one camp to another...not even those stairs to go up to in the morning, nothing at all but the moving caravan....how incredibly romantic all this was...

## Summer Magic

Then there was summer...summer was hide and seek outside the trees, and the fireflies..you were catching them and letting them go, after a min.or two...it was magic in your hands, and all yours...they really had an electric light inside them, but no, you could never know where it was hidden. But there was a big catch to all this.....this big main building had a heavy, well locked door, it was closed at 9 pm sharp....that was the only time we envied the other kids in town.. they could play until late, 11 more likely, while their happy parents were setting on the benches taking the fresh air......all of us, that lived in the building, had to be back by then....even now, I am afraid of closed door, of being left out, of elevators, etc etc...if you were late, you had to go around the house, and shouts, and that was trouble...you stood outside too long, you should have been home by 9....Politics were all around you : in my outside wall, where the kitchen was, ( we had just one big room and a stove , a wooden stove) they did had shot young resistance fighters.. so I had been told, and of course, this was something impressive.. right there, under this window, the young men were shot... I must have been 8, 10 at the very most, when my dad was transferred; things will be never the same.. The town wasbigger, we had a real big apartment...my parents really did not get along at all, now we had time to notice, before, we did not...but wait, wait...how could I forget..my magpies..we had 2, and they were free to go, not kept in cages....one day I left them go.. it was so sad to see them in a cage...but they came back....thik thick against the widow..

## My Magpie Cip

what a thrill that was....to see Cip, my magpie there against the window, asking to get in...so she earned her freedom....she will go all day long, hop around here and there, you'll see her in the neighborhood, on the roofs, usually, and came back home...to be sure that she was back home, for the night, we had a trick.. it was foolproof; my mom pretended to spank me...from where where she was, Cip flew, going for the kill, assaulting my mom with a real flurry of feathers, sharp little hits, one after another, never stopping, until of course, she was in the house and we closed the door...... after I left for Canada, she still lived a few years, very , very old, she lived a very longtime, free to move just around the house now......in my memory, she'll always come to my rescue.

## The Postcard and the Clock

And here it is, one of my favor episodes in my childhood; well, there was this Church fundraising, people were selling nicknacks, anything....I still remember.. I showed my ticket and this girl told me that guess what, I did win a postcard.. ..My teacher came over, double checked the ticket's number and said I really did win a clock...well, I often thought that this was a great metaphor , the postcard versus the clock... 

*- April 2000 Anna*`

const TheDiscreet = `
# Bunuel and surrealism had a long love affair

I love *The Discreet*, because, basically speaking, is a full  
scale comedy, for a change, a real comedy, because nothing really happens,  
and again, mostly of all, because this all idea at work is so absurd.  
B. just disissects but another aspect of our everyday's life: setting down for dinner.  

The reality of everyday's life, became in *The Discreet*, the impossible,  
the absurd thing to achieve, assume cosmic proportions...  
and never the rich bourgeoisie has been looking more useless, corrupt  
(they are drug dealers) and wasted away in a ritual pattern of suppers  
and dinners and flambés à l’orange...

---

In *The Discreet*, this is the purpose of their lives: the dinner, the supper.  
And they are all dressed up for it, all the time, and off they go, all together.  

It is their common goal, as others will build a bridge or a cathedral, here,  
they must have their dinner...  
By the end of the movie, they never did, they never had a single dinner,  
their very purpose of existence has been stalled and denied,  
and it is turning into an existentialism problem...  

But it is a comedy, and off they go, on the road, looking for another invitation...

---

The age group, here, is more than appropriate, they are middle aged,  
old age creeps by, the pleasures of a good dinner  
stand apart, loom over the all day.  
They are, basically speaking, the only left....  

*What will it be today... let's see — some fresh asparagus with hollandaise sauce,  
and there must be a roast, of course...*  

Sex, of course, is to be considered...  
but you eat first, then you think about it...  

Sex in the afternoon, as suggested by the ever present >>>  
and rejected by the even more present in French films Delphine Seyberg,  
can be a real chore — where one gets all that energy,  
especially as one still did not get his dinner served yet...

---

Because this is where the fun really starts, in *The Discreet*...  
for all their preparations, their being "on time,"  
their sticking to each other in this mission,  
well, there's no dinner.  

The simple thing, setting down for supper, is stalled (wrong date),  
or interrupted (by the police), or canceled... whatever...


`

// Writings
export const writings = [
  {
    id: 'anna-childhood',
    slug: '/anna/writings/childhood',
    type: 'post',
    parentId: 'anna-writings',
    title: 'A reflection on childhood in post-war Italy, featuring stories of freedom, magpies, and life in a small town',
    content: AnnaEssayChildhood,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-discreet',
    slug: '/anna/writings/the-discreet',
    type: 'post',
    parentId: 'anna-writings',
    title: 'The Discreet - Buñuel and Surrealism',
    content: TheDiscreet,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Info pages
export const infoPages = [
  {
    id: 'anna-about',
    slug: '/anna/about',
    type: 'post',
    parentId: 'anna-root',
    title: 'About Anna Hook',
    content: 'Artist and writer based in Canada. Contact: annahook@idirect.com',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'anna-pricing',
    slug: '/anna/pricing',
    type: 'post',
    parentId: 'anna-root',
    title: 'Pricing Information',
    content: `Greeting cards are 5x7, blank inside.
    
Annabella cards in COLOR:
- 1 to 300: $1.25 USD / $1.50 CDN (envelope included)
- 300 to 600: $1.00 USD or CDN (delivery charges not included)
- The Pandas are always 75¢ USD or $1.00 CDN

Black and white cards: $1.75 CDN

For orders over 500, allow 1-2 weeks for delivery. Prices negotiable for large orders.`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Export all entities as default
export default [
  annaRoot,
  annaCards,
  annaAntifur,
  annaWritings,
  ...cardEntities,
  ...inkCards,
  ...antifurDrawings,
  ...writings,
  ...infoPages
];
