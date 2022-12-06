export const navItems = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "What is Scotch Whisky?",
    href: "/what-is-scotch-whisky",
  },
  {
    id: 2,
    title: "History of Scotch Whisky",
    href: "/history-of-scotch-whisky",
  },
  {
    id: 3,
    title: "How Scotch is Made",
    href: "/how-scotch-is-made",
  },
  {
    id: 4,
    title: "Regions of Origin",
    href: "/regions",
  },
  {
    id: 5,
    title: "Famous Scotch Whisky Brands",
    href: "/famous-scotch-brands",
  },
  {
    id: 6,
    title: "Scotch Database",
    href: "/scotch-whisky-search",
  },
  {
    id: 7,
    title: "Visitor Survey",
    href: "/visitor-survey",
  },
  {
    id: 8,
    title: "About Me",
    href: "/about-me",
  },
];

export const homeContent = {
  mainTitle: "The Art of Scotch Whisky",
  hero: "/main_hero.webp",
  mainText: [
    `Greetings! Welcome to my website celebrating the storied history and art that is scotch whisky. As an avid enthusiast of whisky, I (like many others) found myself overwhelmed by the vast landscape of scotch. I built this website in an effort to expand my knowledge of this exquisite drink, as well as demonstrate my continued learnings in web development.`,
    `In this website you'll find some neat (no pun intended) resources on the history, production, and types of scotch whisky. The Scotch Database can be used to filter hundreds of scotch whiskies based on name, price, and flavor profile. You can also provide some feedback in our Visitor Survey.`,
    `I hope you find this website fun and informative. Cheers!`,
  ],
};

export const aboutMeContent = {
  mainTitle: "About the Author",
  hero: "/aboutme_hero.jpg",
  mainText: [
    `Hi! I'm Chris.`,
    `I've spent my professional career working in various tech jobs, but just recently started learning how to be a full-stack developer myself. This is one of many websites I built to practice web development. This website was built using the MERN stack, specifically the next.js framework and the Material UI component library.`,
    `As far as scotch goes, I can't say it's my preferred drink of choice, but it's definitely one of my favorites. I think my friends Garrett and Frank first turned me on to Talisker sometime in college, and then I gradually began branching out and trying more scotch on my own. To this day, Talisker is still one of my favorite brands.`,
    `I was fortunate enough to visit Scotland in 2016, but didn't have enough time to do a proper distillery crawl. I hope to visit sometime in the future and really do it right.`,
    `Anyhoo - I hope you found some value in visiting my silly little site. Hopefully you got something out of it, and maybe are preparing to pour yourself a glass of scotch at this very moment. As the Scottish writer David Daiches once said - "The proper drinking of Scotch whisky is more than indulgence: it is a toast to civilization, a tribute to the continuity of culture, a manifesto of man’s determination to use the resources of nature to refresh mind and body and enjoy to the full the senses with which he has been endowed."`,
  ],
};

export const regionButtons = [
  {
    name: "Islands",
    top: "30%",
    left: "12%",
    height: "3.59%",
    width: "10.35%",
  },
  {
    name: "Speyside",
    top: "40%",
    left: "66%",
    height: "3.59%",
    width: "11.43%",
  },
  {
    name: "Highlands",
    top: "53%",
    left: "58%",
    height: "3.59%",
    width: "13.77%",
  },
  {
    name: "Lowlands",
    top: "78%",
    left: "63%",
    height: "3.59%",
    width: "12.70%",
  },
  {
    name: "Islay",
    top: "62%",
    left: "43%",
    height: "3.59%",
    width: "7.03%",
  },
  {
    name: "Campbeltown",
    top: "85%",
    left: "52%",
    height: "3.59%",
    width: "17.58%",
  },
];

export const regionContent = {
  islands: {
    name: "Islands",
    description:
      "Although the Islands (excluding Islay) are not formally recognized as a distinct whisky producing region by the Scotch Whisky Regulations (SWA), many sources consider it an unofficial region. Typically, whiskies produced on the Islands are considered Highland whiskies. The versatility of the Islands accommodates both feathery citrus flavors and smoking peaty noses. Though most Island Whiskies are salted by the sea, some are sweet and herbal. Generally speaking, each Island distillery has its own varied taste profile.",
    distilleries: "Arran, Jura, Tobermory, Highland Park, Scapa, Talisker",
  },
  speyside: {
    name: "Speyside",
    description: `Speyside, the undisputed center for whisky in Scotland, boasts the highest concentration of distilleries - more than half the distilleries in Scotland are located in Speyside. Although the Speyside region is geographically part of the Highlands, it is considered a separate region because of its unique characteristics. The region received its name from the river Spey, which cuts through the area. Many of the distilleries use water straight from the river Spey in their production process. Speyside scotch are thought to be the country's most complex, and are known for being frugal with peat and lavish with nutty fruit flavors. Apple, pear, honey, vanilla and spice all have a part to play in the Speyside whiskies.`,
    distilleries:
      "Glenlivet, Glenfiddich, Macallan, Johnnie Walker, Chivas Regal",
  },
  highlands: {
    name: "Highlands",
    description:
      "The Highlands is the largest of the whisky producing regions in Scotland and generally produces more full-bodies whiskies with deeper notes of peat and smoke. Wild seas and impenetrable moorland dominate the landscape, creating a breeding ground for powerful peaty drams, whilst still leaving room for floral, silky elegance. Due to the vastness of the region, Highland whiskies often taste very different from each other, from the extreme heathery, spicy character of Northern Highlands to the fruity whiskies of the Southern Highlands.",
    distilleries: "Oban, Glenmorangie, Dalmore",
  },
  lowlands: {
    name: "Lowlands",
    description:
      "Perching just above England, the Lowlands can play truant from peat or salinity. Soft and smooth malts are characteristic of the region, offering a gentle, elegant palate reminiscent of grass, honeysuckle, cream, ginger, toffee, toast and cinnamon. The Lowlands produce drams doted on by lovers of the aperitif and mellow malt. The Lowlands is located at the southernmost part of Scotland, and is a flat region with no mountains. Scotch from this region are generally considered as the most light bodied of the Single Malts.",
    distilleries: "Glenkinchie, Bladnoch, Auchentoshan",
  },
  islay: {
    name: "Islay",
    description: `Pronunced "eye-luh", Islay scotch is considered to be the smokiest and strongest-flavored of the single malts. Their strong flavor is believed to be due to the region's exposure to the high winds and seas of the west coast. Islay malts are pungent with peat, smoke and salinity, revealing their complexity layer after layer.`,
    distilleries: "Laphroaig, Lagavulin, Bowmore, Ardbeg",
  },
  campbeltown: {
    name: "Campbeltown",
    description: `Once the whisky capital of Scotland, there are only three distilleries remaining in Campbeltown. However, despite the region’s contraction, the malts produced are fiercely enduring and distinctive. Wet wool, salt, smoke, fruit, vanilla and toffee are embraced, abandoned, and cocktailed in the various malts of Campbeltown.`,
    distilleries: "Glen Scotia, Glengyle, Springbank",
  },
};

export const whatIsContent = [
  {
    title: "What is Scotch Whisky?",
    imageUrl: "/scotch_glass_1.jpeg",
    description: [
      <p>
        Scotch whisky (often simply called Scotch) is malt whisky or grain
        whisky made in Scotland. Scotch whisky must be made in a manner
        specified by law.
      </p>,
      <p>
        All Scotch whisky was originally made from malted barley. Commercial
        distilleries began introducing whisky made from wheat and rye in the
        late 18th century. Scotch whisky is divided into five distinct
        categories: single malt Scotch whisky, single grain Scotch whisky,
        blended malt Scotch whisky (formerly called "vatted malt" or "pure
        malt"), blended grain Scotch whisky, and blended Scotch whisky.
      </p>,
      <p>
        All Scotch whisky must be aged in oak barrels for at least three years.
        Any age statement on a bottle of Scotch whisky, expressed in numerical
        form, must reflect the age of the youngest whisky used to produce that
        product. A whisky with an age statement is known as guaranteed-age
        whisky. A whisky without an age statement is known as a no age statement
        (NAS) whisky, the only guarantee being that all whisky contained in that
        bottle is at least three years old.
      </p>,
    ],
  },
  {
    title: "Comparison to Other Whiskies",
    imageUrl: "/whiskies.jpg",
    caption:
      "Multiple types of whiskies including bourbon, Scotch, rye, and Irish whisky.",
    description: [
      <p>
        Outside of Scotch whisky, there are several other types of whisky found
        all over the world. Some of the most commonly recognized whiskies
        include:`
      </p>,
      <ul>
        <li>
          Whiskey/Whiskey, a broad category of distilled liquor made from
          fermented grain mash.
        </li>
        <li>
          Bourbon, an American whiskey (specifically distilled in Kentucky) made
          from at least 51% corn
        </li>
        <li>
          Rye Whiskey, which can refer to either American whiskey containing at
          least 51% rye wheat, or to Canadian whisky (which may not include rye
          wheat in the production process at all).
        </li>
      </ul>,
      <p>
        A common confusion among drinkers of whiskey/whisky is which spelling is
        correct; in short, both spellings are correct depending on the country
        of origin. Generally, the United States and Ireland refer to their
        beverage as "whiskey", whereas other countries in Europe and Asia will
        use the term "whisky". Where the original variation in spelling came
        from is still a matter of debate. Legend has it that during the 1800s,
        most Scotch Whisky was considered as very low quality: because of this,
        American and Irish distillers began adding the “e” in order to show a
        point of distinction to consumers that the quality of their whiskey was
        higher than that of Scotch.
      </p>,
    ],
  },
  {
    title: "Legal Definition",
    description: [
      <p>
        As of 23 November 2009, the Scotch Whisky Regulations 2009 (SWR) define
        and regulate the production, labelling, packaging as well as the
        advertising of Scotch whisky in the United Kingdom. They replace
        previous regulations that focused solely on production. International
        trade agreements have the effect of making some provisions of the SWR
        apply in various other countries as well as in the UK. The SWR define
        "Scotch whisky" as whisky that is:
      </p>,
      <ul>
        <li>
          Produced at a distillery in Scotland from water and malted barley (to
          which only whole grains of other cereals may be added) all of which
          have been:
          <ul>
            <li>Processed at that distillery into a mash</li>
            <li>
              Converted at that distillery to a fermentable substrate only by
              endogenous enzyme systems
            </li>
            <li>Fermented at that distillery only by adding yeast</li>
            <li>
              Distilled at an alcoholic strength by volume of less than 94.8%
              (190 US proof)
            </li>
          </ul>
        </li>
        <li>
          Wholly matured in an excise warehouse in Scotland in oak casks of a
          capacity not exceeding 700 liters (185 US gal; 154 imp gal) for at
          least three years
        </li>
        <li>
          Retaining the color, aroma, and taste of the raw materials used in,
          and the method of, its production and maturation
        </li>
        <li>
          Containing no added substances, other than water and plain (E150A)
          caramel coloring
        </li>
        <li>
          Comprising a minimum alcoholic strength by volume of 40% (80 US proof)
        </li>
      </ul>,
    ],
  },
];

export const historyContent = [
  {
    title: "15th Century",
    description: [
      <p>
        According to the Scotch Whisky Association, Scotch whisky evolved from a
        Scottish drink called uisge beatha, which means "water of life". The
        earliest record of distillation in Scotland occurred as long ago as
        1494, as documented in the Exchequer Rolls, which were records of royal
        income and expenditure. The quote above records eight bolls of malt
        given to Friar John Cor wherewith to make aqua vitae (Latin for "water
        of life," = uisge beatha) over the previous year. This would be enough
        for 1,500 bottles, which suggests that distillation was well-established
        by the late 15th century.
      </p>,
      <p>
        Initially, whisky was also consumed as a tonic for medicinal purposes.
        In 1505 the City of Edinburgh awarded the medical practitioners, The
        Guild of Surgeon Barbers, the rights to monopolize whisky in the city.
      </p>,
    ],
  },
  {
    title: "17th-18th Century",
    imageUrl: "/18th_century_scotch.jpg",
    caption: "An 18th Century distiller making Scotch whisky.",
    description: [
      <p>
        Whisky production was first taxed in 1644 by the Scottish Customs &
        Excise (known as Gougers), causing a rise in illicit whisky distilling
        in the country. This drove many distillers to move to rural areas such
        as the glens, highlands and islands to set up illicit stills and avoid
        paying duty on the whisky they produced. In 1690, Ferintosh Distillery
        became the first commercial whisky distillery in Scotland as a result of
        Duncan Forbes of Culloden gaining exemption from paying the whisky duty.
      </p>,
      <p>
        Between the 1760s and the 1830s a substantial unlicensed trade
        originated from the Highlands, forming a significant part of region's
        export economy. In 1782, more than 1,000 illegal stills were seized in
        the Highlands: these can only have been a fraction of those in
        operation. The Lowland distillers, who had no opportunity to avoid
        taxation, complained that un-taxed Highland whisky made up more than
        half the market. The heavy taxation during the Napoleonic Wars gave the
        illicit trade a big advantage, but their product was also considered
        better quality, commanding a higher price in the Lowlands. This was due
        to the method of taxation: malt was subject to tax (at a rate that
        climbed substantially between the 1790s and 1822). The licensed
        distillers therefore used more raw grain in an effort to reduce their
        tax bill.
      </p>,
    ],
  },
  {
    title: "19th Century",
    description: [
      <p>
        With an ever growing demand for whisky from outside the Scottish
        borders, unauthorised distillation was ubiquitous by the 1820s. Nearly
        half the whisky drunk in Scotland came from illicit stills, with no
        payment of duty, even though Excise Gaugers seized up to 14,000 illicit
        stills every year.
      </p>,
      <p>
        The Highland magistrates, themselves members of the landowning classes,
        had a lenient attitude to unlicensed distillers - all of whom would be
        tenants in the local area. They understood that the trade supported the
        rents paid. Imprisoned tenants would not be able to pay any rent. In
        1823, Parliament eased restrictions on licensed distilleries with the
        "Excise Act", while at the same time making it harder for the illegal
        stills to operate. Magistrates found counsel for the crown appearing in
        their courts, so forcing the maximum penalties to be applied, with some
        cases removed to the Court of Exchequer in Edinburgh for tougher
        sentences. Highland landowners were now happy to remove tenants who were
        distillers in clearances on their estates. These changes ushered in the
        modern era of Scotch production: in 1823 2,232,000 gallons of whisky had
        duty paid on it; in 1824 this increased to 4,350,000 gallons.
      </p>,
      <p>
        Two events helped to increase whisky's popularity: first, the
        introduction in 1831 of the column still; the whisky produced with this
        process was generally less expensive to produce and also less intense
        and smoother, because a column still can perform the equivalent of
        multiple distillation steps in a continuous distillation process.
        Second, the phylloxera bug destroyed wine and cognac production in
        France in 1880.
      </p>,
    ],
  },
  {
    title: "20th Century",
    imageUrl: "/scotch_barrels.jpg",
    caption:
      "Distillers during the 20th Century realized that long-term storage in oak casks greatly improved the color, aroma and taste of whisky",
    description: [
      <p>
        Perhaps one of the most significant developments in the history of
        Scotch Whisky was the use of oak casks for maturation. During the 1700s
        and 1800s, whisky was most likely drunk unmatured; however, oak wine,
        sherry and port casks were the most appropriate vessels available to
        store and transfer whisky at that time. It was soon recognized that
        long-term storage in oak casks greatly improved the color, aroma and
        taste of whisky and removed many of the harsher characteristics of the
        unmatured spirit. It eventually became a requirement in the 1900s that
        all whisky be matured in oak casks for a minimum of three years. Today
        it is recognised that the wooden cask in which a whisky is matured is
        perhaps the single most important factor in creating its flavor.
      </p>,
    ],
  },
];
