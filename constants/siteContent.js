import { Typography } from "@mui/material";

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
    <p>
      Greetings! Welcome to my website celebrating the storied history and art
      that is scotch whisky. As an avid enthusiast of whisky, I (like many
      others) found myself overwhelmed by the vast landscape of scotch. I built
      this website in an effort to expand my knowledge of this exquisite drink,
      as well as demonstrate my continued learnings in web development.
    </p>,
    <p>
      In this website you'll find some neat (<i>no pun intended</i>) resources
      on the history, production, and types of scotch whisky. The{" "}
      <a href="/scotch-whisky-search">Scotch Database</a> can be used to filter
      hundreds of scotch whiskies based on name, price, and flavor profile. You
      can also provide some feedback in our{" "}
      <a href="/visitor-survey">Visitor Survey</a>.
    </p>,
    <p>I hope you find this website fun and informative. Cheers!</p>,
  ],
};

export const aboutMeContent = {
  mainTitle: "About the Author",
  hero: "/aboutme_hero.jpg",
  mainText: [
    <p>Hi! I'm Chris.</p>,
    <p>
      I've spent my professional career working in various tech jobs, but just
      recently started learning how to be a full-stack developer myself. This is
      one of many websites I built to practice web development. This website was
      built using the MERN stack, specifically the next.js framework and the
      Material UI component library. If you want to see some of my other
      websites, you can check out my portfolio website{" "}
      <a href="https://cr-portfolio-v2.vercel.app/" target="blank">
        here
      </a>
      .
    </p>,
    <p>
      As far as scotch goes, I can't say it's my preferred drink of choice, but
      it's definitely one of my favorites. I think my friends Garrett and Frank
      first turned me on to Talisker sometime in college, and then I gradually
      began branching out and trying more scotch on my own. To this day,
      Talisker is still one of my favorite brands.
    </p>,
    <p>
      I was fortunate enough to visit Scotland in 2016, but didn't have enough
      time to do a proper distillery crawl. I hope to visit sometime in the
      future and really do it right.
    </p>,
    <p>
      Anyhoo - I hope you found some value in visiting my silly little site.
      Hopefully you got something out of it, and maybe are preparing to pour
      yourself a glass of scotch at this very moment. As the Scottish writer
      David Daiches once said - "The proper drinking of Scotch whisky is more
      than indulgence: it is a toast to civilization, a tribute to the
      continuity of culture, a manifesto of man’s determination to use the
      resources of nature to refresh mind and body and enjoy to the full the
      senses with which he has been endowed."
    </p>,
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
    description: [
      <p>
        Although the Islands (excluding Islay) are not formally recognized as a
        distinct whisky producing region by the{" "}
        <a href="https://en.wikipedia.org/wiki/Scotch_Whisky_Regulations_2009">
          Scotch Whisky Regulations (SWR)
        </a>
        , many sources consider it an unofficial region.
      </p>,
      <p>
        Typically, whiskies produced on the Islands are considered Highland
        whiskies. The versatility of the Islands accommodates both feathery
        citrus flavors and smoking peaty noses. Though most Island Whiskies are
        salted by the sea, some are sweet and herbal. Generally speaking, each
        Island distillery has its own varied taste profile.
      </p>,
    ],
    distilleries: "Arran, Jura, Tobermory, Highland Park, Scapa, Talisker",
  },
  speyside: {
    name: "Speyside",
    description: [
      <p>
        Speyside, the undisputed center for whisky in Scotland, boasts the
        highest concentration of distilleries - more than half the distilleries
        in Scotland are located in Speyside. Although the Speyside region is
        geographically part of the Highlands, it is considered a separate region
        because of its unique characteristics. The region received its name from
        the river Spey, which cuts through the area. Many of the distilleries
        use water straight from the river Spey in their production process.
      </p>,
      <p>
        Speyside scotch are thought to be the country's most complex, and are
        known for being frugal with peat and lavish with nutty fruit flavors.
        Apple, pear, honey, vanilla and spice all have a part to play in the
        Speyside whiskies.
      </p>,
    ],
    distilleries:
      "Glenlivet, Glenfiddich, Macallan, Johnnie Walker, Chivas Regal",
  },
  highlands: {
    name: "Highlands",
    description: [
      <p>
        The Highlands is the largest of the whisky producing regions in Scotland
        and generally produces more full-bodies whiskies with deeper notes of
        peat and smoke. Wild seas and impenetrable moorland dominate the
        landscape, creating a breeding ground for powerful peaty drams, whilst
        still leaving room for floral, silky elegance.
      </p>,
      <p>
        Due to the vastness of the region, Highland whiskies often taste very
        different from each other, from the extreme heathery, spicy character of
        Northern Highlands to the fruity whiskies of the Southern Highlands.
      </p>,
    ],
    distilleries: "Oban, Glenmorangie, Dalmore",
  },
  lowlands: {
    name: "Lowlands",
    description: [
      <p>
        The Lowlands is located at the southernmost part of Scotland, and is a
        flat region with no mountains. Scotch from this region are generally
        considered as the most light bodied of the Single Malts.
      </p>,
      <p>
        Perching just above England, the Lowlands can play truant from peat or
        salinity. Soft and smooth malts are characteristic of the region,
        offering a gentle, elegant palate reminiscent of grass, honeysuckle,
        cream, ginger, toffee, toast and cinnamon. The Lowlands produce drams
        doted on by lovers of the aperitif and mellow malt.
      </p>,
    ],
    distilleries: "Glenkinchie, Bladnoch, Auchentoshan",
  },
  islay: {
    name: "Islay",
    description: [
      <p>
        Pronunced "eye-luh", Islay scotch is considered to be the smokiest and
        strongest-flavored of the single malts. Their strong flavor is believed
        to be due to the region's exposure to the high winds and seas of the
        west coast. Islay malts are pungent with peat, smoke and salinity,
        revealing their complexity layer after layer.
      </p>,
    ],
    distilleries: "Laphroaig, Lagavulin, Bowmore, Ardbeg",
  },
  campbeltown: {
    name: "Campbeltown",
    description: [
      <p>
        Once the whisky capital of Scotland, there are only three distilleries
        remaining in Campbeltown. However, despite the region’s contraction, the
        malts produced are fiercely enduring and distinctive. Wet wool, salt,
        smoke, fruit, vanilla and toffee are embraced, abandoned, and cocktailed
        in the various malts of Campbeltown.
      </p>,
    ],
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
      <div>
        As of 23 November 2009, the Scotch Whisky Regulations 2009 (SWR) define
        and regulate the production, labelling, packaging as well as the
        advertising of Scotch whisky in the United Kingdom. They replace
        previous regulations that focused solely on production. International
        trade agreements have the effect of making some provisions of the SWR
        apply in various other countries as well as in the UK. The SWR define
        "Scotch whisky" as whisky that is:
      </div>,
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

export const processContent = [
  {
    title: "How Scotch Whisky is Made",
    imageUrl: "/whisky_process.jpg",
    description: [
      <p>
        Single malt Scotch whisky is made using an age old process, beautiful in
        its simplicity. It uses natural, raw ingredients: malted barley (and/or
        other grains), fresh spring water, and yeast.
      </p>,
      <p>
        Although traditional Scotch whisky is made from exlusively 100% malted
        barley, the repeal of the British Corn Laws in 1846 allowed Scottish
        distillers to begin creating blended whisky and grain whisky as scotch.
        In this guide, we will break down the similarities in both the malt
        whisky process (which utilizes a pot still) as well as the blended/grain
        whisky process (which utilizes a patent, or Coffey still).
      </p>,
    ],
  },
  {
    title: "Malting",
    imageUrl: "/malt.jpg",
    description: [
      <p>
        The barley is first screened to remove any foreign matter and then
        soaked for two or three days in tanks of water known as steeps. After
        this it is spread out on a concrete floor known as the malting floor and
        allowed to germinate. Germination may take from 8 to 12 days depending
        on the season of the year, the quality of the barley used and other
        factors. During germination the barley secretes the enzyme diastase
        which makes the starch in the barley soluble, thus preparing it for
        conversion into sugar. Throughout this period the barley must be turned
        at regular intervals to control the temperature and rate of germination.
      </p>,
      <p>
        At the appropriate moment germination is stopped by drying the malted
        barley or green malt in the malt kiln. More usually nowadays malting is
        carried out in Saladin boxes or in drum maltings. in both of which the
        process is controlled mechanically. Instead of germinating on the
        distillery floor, the grain is contained in large rectangular boxes
        (Saladin) or in large cylindrical drums. Temperature is controlled by
        blowing air at selected temperatures upwards through the germinating
        grain, which is turned mechanically. A recent development caused by the
        rapid expansion of the Scotch Whisky Industry is for distilleries to
        obtain their malt from centralized maltings which supply a number of
        distilleries, thereby enabling the malting process to be carried out
        more economically.
      </p>,
    ],
  },
  {
    title: "Mashing",
    imageUrl: "/mash.jpg",
    description: [
      <p>
        The dried malt is ground in a mill and the grist, as it is now called.
        is mixed with hot water in a large circular vessel called a mash tun.
        The soluble starch is thus converted into a sugary liquid known as wort.
        This is drawn off from the mash tun and the solids remaining are removed
        for use as cattle food.
      </p>,
      <p>
        For blended and single-grain scotch, the mash includes (or solely
        consists of) unmalted cereals, respectively. Any unmalted cereals used
        are cooked under steam pressure in Converters for about 3.5 hours.
        During this time the mixture of grain and water is agitated by stirrers
        inside the cooker. The starch cells in the grain burst and when this
        liquid is transferred to the mash tun, with the malted barley, the
        diastase in the latter converts the starch into sugar.
      </p>,
    ],
  },
  {
    title: "Fermentation",
    imageUrl: "/ferment.jpg",
    description: [
      <p>
        After cooling, the wort is passed into large vessels holding anything
        from 9,000 to 45,000 litres of liquid where it is fermented by the
        addition of yeast. For single-grain and blended scotch, the wort is
        collected at a specific gravity lower than in the case of the Pot Still
        process. The living yeast attacks the sugar in the wort and converts it
        into crude alcohol. Fermentation takes about 48 hours and produces a
        liquid known as wash, containing alcohol of low strength, some
        unfermentable matter and certain by-products of fermentation.
      </p>,
    ],
  },
  {
    title: "Distillation",
    imageUrl: "/distill.jpg",
    description: [
      <p>
        Malt Whisky is distilled twice in large copper Pot Stills. The liquid
        wash is heated to a point at which the alcohol becomes vapor. This rises
        up the still and is passed into the cooling plant where it is condensed
        into liquid state. The cooling plant may take the form of a coiled
        copper tube or worm that is kept in continuously running cold water, or
        it may be another type of condenser.
      </p>,
      <p>
        The first distillation separates the alcohol from the fermented liquid
        and eliminates the residue of the yeast and unfermentable matter. This
        distillate, known as low wines, is then passed into another still where
        it is distilled a second time. The first runnings from this second
        distillation are not considered potable and it is only when the spirit
        reaches an acceptable standard that it is collected in the Spirit
        Receiver. Again, towards the end of the distillation. the spirit begins
        to fall off in strength and quality. It is then no longer collected as
        spirit but drawn off and kept, together with the first running, for
        redistillation with the next low wines.
      </p>,
      <p>
        For single-grain and blended whiskies, distillation is carried out in a
        patent or Coffey still and the spirit collected at a much higher
        strength.
      </p>,
    ],
  },
  {
    title: "Maturation",
    imageUrl: "/scotch_barrels_2.jpg",
    caption:
      "By Scottish law, any whisky to be considered scotch whisky must be aged in oak barrels for at least three years.",
    description: [
      <p>
        Both Malt and Grain Whisky must be matured after distillation has been
        completed. The new spirit is filled into casks of oak wood which, being
        permeable, allows air to pass in and evaporation takes place. By this
        means the harsher constituents in the new spirit are removed and it
        becomes in due course a mellow whisky. By Scottish law, any whisky to be
        considered scotch whisky must be aged in oak barrels for at least three
        years. Malt Whisky which contains more of these flavory constituents
        takes longer to mature than Grain Whisky and is often left in the cask
        for 15 years or even longer. The period of maturation for both Malt and
        Grain Whisky is also affected by the size of casks used. the strength at
        which the spirit is stored and the temperature and humidity of the
        warehouse.
      </p>,
    ],
  },
  {
    title: "Blending",
    description: [
      <p>
        After maturation the different whiskies may be blended together with
        other whiskies.The blend is then reduced to the strength required by the
        addition of soft water. The different whiskies in the blend will have
        derived some color from the casks in which they have been matured, but
        the degree of color will vary from one whisky to another. Whisky matured
        in former fresh oak sherry casks will usually be a darker color than
        that which has been matured in refilled whisky casks. The blender aims
        at uniformity in his product and he may bring his whisky to a definite
        standard color by adding, if necessary, a small amount of coloring
        solution prepared from caramelized sugar, which is infinitesimal in
        relation to the volume of whisky involved. The whisky is then filtered
        carefully.
      </p>,
    ],
  },
  {
    title: "Packaging & Labeling",
    imageUrl: "/scotch_label.jpeg",
    description: [
      <p>
        The final stage in production of Scotch Whisky is labelling and
        packaging. Most Scotch Whiskies are marketed at home and abroad in
        branded bottles. A Scotch whisky label comprises several elements that
        indicate aspects of production, age, bottling, and ownership. Some of
        these elements are regulated by the Scotch Whisky Regulations (SWR), and
        some reflect tradition and marketing.
      </p>,
      <p>
        The label always features a declaration of the malt or grain whiskies
        used. A single malt Scotch whisky is one that is entirely produced from
        malt in one distillery. One may also encounter the term "single cask",
        signifying the bottling comes entirely from one cask. The term "blended
        malt" signifies that single malt whisky from different distilleries are
        blended in the bottle. The Cardhu distillery also began using the term
        "pure malt" for the same purpose, causing a controversy in the process
        over clarity in labelling – the Glenfiddich distillery was using the
        term to describe some single malt bottlings. As a result, the Scotch
        Whisky Association declared that a mixture of single malt whiskies must
        be labelled a "blended malt". The use of the former terms "vatted malt"
        and "pure malt" is prohibited. The term "blended malt" is still debated,
        as some bottlers maintain that consumers confuse the term with "blended
        Scotch whisky", which contains some proportion of grain whisky.
      </p>,
      <p>
        The brand name featured on the label is usually the same as the
        distillery name (for example, the Talisker Distillery labels its
        whiskies with the Talisker name).In addition to requiring that Scotch
        whisky be distilled in Scotland, the SWR require that it also be bottled
        and labelled in Scotland. Labels may also indicate the region of the
        distillery (for example, Islay or Speyside).
      </p>,
      <p>
        Alcoholic strength is expressed on the label with "Alcohol By Volume"
        ("ABV") or sometimes simply "Vol". Typically, bottled whisky is between
        40% and 46% ABV. Whisky is considerably stronger when first emerging
        from the cask—normally 60–63% ABV. Water is then added to create the
        desired bottling strength. If the whisky is not diluted before bottling,
        it can be labelled as cask strength.
      </p>,
      <p>
        A whisky's age may be listed on the bottle providing a guarantee of the
        youngest whisky used. An age statement on the bottle, in the form of a
        number, must reflect the age of the youngest whisky used to produce that
        product. A whisky with an age statement is known as guaranteed age
        whisky. Scotch whisky without an age statement may, by law, be as young
        as three years old.[1] In the early 21st century, such "No age
        statement" whiskies became more common, as distilleries responded to the
        depletion of aged stocks caused by improved sales. A label may carry a
        distillation date or a bottling date. Whisky does not mature once
        bottled, so if no age statement is provided, one may calculate the age
        of the whisky if both the distillation date and bottling date are given.
      </p>,
      <p>
        Labels may also carry various declarations of filtration techniques or
        final maturation processes. A Scotch whisky labelled as "natural" or
        "non-chill-filtered" has not been through a filtration process during
        bottling that removes compounds that some consumers see as desirable.
        Whisky is aged in various types of casks—and often in used sherry or
        port casks—during distinct portions of the maturation process, and will
        take on characteristics, flavor and aromas from such casks. Special
        casks are sometimes used at the end of the maturation process, and such
        whiskies may be labelled as "wood finished", "sherry/port finished", and
        so on.
      </p>,
    ],
  },
];

export const ratingLabels = {
  0.5: `My father was murdered by a glass of Scotch! How dare you!!`,
  1: `I'd rather drink sewer runoff rung from a used diaper.`,
  1.5: `I'd rather drink a bottle of hot sauce.`,
  2: `It's not my bag and I give anyone who likes it a weird look.`,
  2.5: `I don't hate it.`,
  3: `I tried some once and it was good.`,
  3.5: `I tried some once and all of a sudden I'm a "Scotch enthusiast."`,
  4: `Call me 'T9F293048 GLOBAL INDUSTRIAL 96" 6 SPEED 17018 CFM' because I'm a big fan!`,
  4.5: `Scotch whisky is the earth's milk and only the strong willed can receive her bounty!!`,
  5: `A CANNY BELIEVE MA MAW DREESED ME UP AS A BOX A GRAVY FUR MA HALLOWEEN DISCO WHEN I WAS BUT A WEE LADDAE!!`,
};

export const interestLabels = {
  1: `Rarely`,
  2: `Sometimes`,
  3: `About half the time`,
  4: `Often`,
  5: `Almost always`,
};

export const initialFormValues = {
  "hover-feedback": "",
  "interest-slider": 3,
  "scotch-brands": [],
  "favorite-whisky": "",
};

export const brandList = [
  `Aberfeldy`,
  `Aberlour`,
  `AnCnoc`,
  `Ardbeg`,
  `Ardmore`,
  `Arran`,
  `Auchentoshan`,
  `Auchroisk`,
  `Aultmore`,
  `Balblair`,
  `Ballantine's`,
  `Balvenie`,
  `Bank Note`,
  `Bell's`,
  `Ben Nevis`,
  `BenRiach`,
  `Benrinnes`,
  `Benromach`,
  `Big Peat`,
  `Black Bottle`,
  `Bladnoch`,
  `Blair Athol`,
  `Blandnoch`,
  `Bowmore`,
  `Brora`,
  `Bruichladdich`,
  `Buchanan's`,
  `Bunnahabhain`,
  `Caol Ila`,
  `Caol`,
  `Cardhu`,
  `Catto's`,
  `Chivas Regal`,
  `Clynelish`,
  `Compass Box`,
  `Cragganmore`,
  `Craigellachie`,
  `Cutty Sark`,
  `Dalmore`,
  `Dalwhinnie`,
  `Deanston`,
  `Deveron`,
  `Dewar's`,
  `Dun Bheagan`,
  `Edradour`,
  `Elements of Islay`,
  `Famous Grouse`,
  `Fettercairn`,
  `Finlaggan`,
  `Glen Deveron`,
  `Glen Elgin`,
  `Glen Garioch`,
  `Glen Grant`,
  `Glen Moray`,
  `Glen Scotia`,
  `Glen Spey`,
  `Glenburgie`,
  `Glencadam`,
  `GlenDronach`,
  `Glenfarclas`,
  `Glenfiddich`,
  `Glenglassaugh`,
  `Glengoyne`,
  `Glenkinchie`,
  `Glenlivet`,
  `Glenlossie`,
  `Glenmorangie`,
  `Glenrothes`,
  `Glentauchers`,
  `Glenturret`,
  `Grand Macnish`,
  `Grant's`,
  `Hankey Bannister`,
  `Hazelburn`,
  `Highland Park`,
  `Highland Queen`,
  `Ileach`,
  `Inchgower`,
  `Islay Mist`,
  `J&B`,
  `John Barr`,
  `Johnnie Walker`,
  `Johnnie`,
  `Jura`,
  `Kavalan`,
  `Kilchoman`,
  `Kilkerran`,
  `Kininvie`,
  `Knockando`,
  `Lagavulin`,
  `Laphroaig`,
  `Ledaig`,
  `Linkwood`,
  `Lismore`,
  `Loch Lomond`,
  `Longmorn`,
  `Longrow`,
  `Macallan`,
  `Mackinlay's`,
  `Mannochmore`,
  `McClelland's`,
  `Miltonduff`,
  `Monkey Shoulder`,
  `Mortlach`,
  `Oban`,
  `Old Ballantruan`,
  `Old Pulteney`,
  `Passport`,
  `Pig's Nose`,
  `Port Ellen`,
  `Royal Brackla`,
  `Royal Lochnagar`,
  `Scallywag`,
  `Scapa`,
  `Sheep Dip`,
  `Singleton of Dufftown`,
  `Singleton of Glen`,
  `Singleton of Glendullan`,
  `Speyburn`,
  `Speyside`,
  `Springbank`,
  `Storas`,
  `Strathisla`,
  `Strathmill`,
  `Stronachie`,
  `Talisker`,
  `Tamdhu`,
  `Tamnavulin`,
  `Té Bheag`,
  `Teacher's`,
  `Teaninich`,
  `Timorous Beastie`,
  `Tobermory`,
  `Tomatin`,
  `Tomintoul`,
  `Tormore`,
  `Tullibardine`,
  `Wemyss`,
  `Whyte & Mackay`,
  `Wolfburn`,
];

export const brandCards = [
  {
    id: "arran",
    imageUrl: "/brand_logos/arran_logo.jpeg",
    name: "Arran",
    region: "Islands",
    founded: 1995,
    desc: [
      <p>
        Although the Arran distillery is relatively new (production started in
        1995), the island in the Firth of Clyde has a long history of
        whisky-making. A fertile place, the farmers in the south of the island
        had plenty of raw materials to work with, and when home distillation and
        small stills were effectively banned in the late 18th century, they
        simply went underground.
      </p>,
      <p>
        All that changed in 1995 when a consortium, headed by former Chivas Bros
        MD Harold Currie, chose a site at Lochranza in the north of the island.
        The decision to move to a part of Arran that was previously unknown for
        whisky was a result of two facts: a good water supply and potential for
        tourism. Today, in excess of 60,000 people visit the distillery every
        year.
      </p>,
    ],
    interestingFact: (
      <span>
        During the construction of the distillery in 1994, a pair of golden
        eagles built their nest on a cliff near the distillery; as golden eagles
        are a protected species, this temporarily halted construction of the
        distillery.
      </span>
    ),
  },
  {
    id: "cardhu",
    imageUrl: "/brand_logos/cardhu_logo.jpeg",
    name: "Cardhu",
    region: "Speyside",
    founded: 1824,
    desc: [
      <p>
        One of the oldest distilleries in Speyside, Cardhu (at that point
        Cardow) started life as a farm whose ‘tack’ was taken by John Cumming
        and his wife Helen in 1811. They soon started making illicit whisky –
        research suggests it was Helen who was in charge of operations – and
        operating the farm as an early warning station for the moonshiners in
        Glen Livet. Legend has it when the gaugers arrived at the farm, Helen
        would distract them and run a red flag up a pole alerting their cronies.
      </p>,
      <p>
        In 1893, the distillery was sold to long-term customer John Walker &
        Sons on the understanding that the family would still run the distillery
        and have a seat on the Walker board. The distillery was expanded from
        two stills to four in 1899 and then up to six in 1960.
      </p>,
    ],
    interestingFact: (
      <span>
        The word "cardhu" derives from the Scots Gaelic <i>Carn Dubh</i>,
        meaning "Black Rock".
      </span>
    ),
  },
  {
    id: "dalwhinnie",
    imageUrl: "/brand_logos/dalwhinnie_logo.png",
    name: "Dalwhinnie",
    region: "Highland",
    founded: 1898,
    desc: [
      <p>
        Given the importance to the whisky trade of the railway line which
        linked Inverness (and Speyside) with the central belt, it is surprising
        that it took until 1897 for a distillery to be built close to the
        settlement nearest its highest point, Dalwhinnie.
      </p>,
      <p>
        Three local businessmen, John Grant, George Sellar and Alexander
        Mackenzie, joined together to make whisky at such an advantageous
        location, but their Strathspey distillery [
        <i>"the plant lies close to the river"</i>] failed. Its second set of
        owners fared little better, and in 1905 it was sold, as Dalwhinnie, to
        American distiller Cook & Bernheimer, making this the first Scotch
        distillery to be owned by a non-UK company, a relationship which ended
        14 years later when blenders Macdonald Greenless took charge.
      </p>,
      <p>
        Though well connected by road and rail, Dalwhinnie’s exposed location
        means that it is regularly cut off in winter – it holds the dubious
        distinction of being the coldest settlement in the UK, with an average
        temperature of 6˚C.{" "}
      </p>,
    ],
    interestingFact: (
      <span>
        Dalwhinnie has the highest-elevation working distillery in Scotland, at
        1164 feet above sea level.
      </span>
    ),
  },
  {
    id: "erdradour",
    imageUrl: "/brand_logos/erdradour_logo.jpeg",
    name: "Erdradour",
    region: "Highland",
    founded: 1825,
    desc: [
      <p>
        Another of central Perthshire’s multiplicity of farm distilleries,
        Edradour started production at its current site in 1837, although one of
        the farmers who formed that original consortium, Duncan Forbes, had been
        legally distilling close by since 1825. The plentiful supplies of water,
        tight, hidden glens, and access to back roads into Perth, made this a
        prime area for moonshining, so it is entirely possible (even probable)
        that Forbes knew the intricacies of whisky-making before going legit.
      </p>,
      <p>
        It remained associated with the original grouping until 1933, when the
        Mackintosh family sold it as a (barely) going concern to the famous
        blending house of William Whiteley. Quite why Whiteley bought such a
        small distillery – it was Scotland’s tiniest for many years – has never
        been fully explained. The firm had built up a solid business in the US
        during Prohibition with its King’s Ransom blend, thanks to Whiteley’s
        appointment of none other than Mafia boss Frank Costello as his US sales
        representative. Five years later, Costello’s associate Irving Haim took
        over as Edradour’s owner, with Costello (and his firm) taking a share of
        sales of King’s Ransom. This slightly unusual arrangement lasted until
        Haim’s death in 1976.
      </p>,
      <p>
        As of 2002, Erdradour is owned by independent bottler Signatory Vintage.
        One of the prettiest distilleries in Scotland, Edradour remains a major
        tourist attraction.
      </p>,
    ],
    interestingFact: (
      <span>
        Producing only 12 casks of Scotch whisky a week, Erdradour Distillery is
        the smallest traditional distillery in Scotland.
      </span>
    ),
  },
  {
    id: "glenfarclas",
    imageUrl: "/brand_logos/glenfarclas_logo.webp",
    name: "Glenfarclas",
    region: "Speyside",
    founded: 1805,
    desc: [
      <p>
        Glenfarclas means ‘<i>valley of the green grass</i>’, an indication of
        the richness of the pasture land which surrounds the distillery. Indeed,
        the distillery farm ran from the late 1790s until 1988. Like so many of
        the oldest sites, the farm buildings would have been pressed into
        service as a site for illicit distillation prior to the 1823 Excise Act.
        It took a further 13 years for original owner Robert Hay to take out a
        licence. When Hay died in 1865 his neighbour John Grant bought the
        distillery for £512. It has remained in his family’s hands ever since.
      </p>,
      <p>
        This continuity has allowed Glenfarclas to still reflect an older way of
        making whisky, but this willingness to retain tradition is not down to a
        romantic belief in the past. Glenfarclas is nothing if not a successful
        business. In recent years an export-led strategy has seen it expand
        globally. It now sells in excess of 700,000 bottles annually – and at
        very keen prices. Glenfarclas, even at 30 years of age, represents some
        of the best value whisky around. The quality speaks for itself.
      </p>,
    ],
    interestingFact: (
      <span>
        Glenfarclas was one of the first distilleries in Scotland to open a
        visitor center, which it opened to the public in 1973.
      </span>
    ),
  },
  {
    id: "glenlivet",
    imageUrl: "/brand_logos/glenlivet_logo.png",
    name: "Glenlivet",
    region: "Speyside",
    founded: 1824,
    desc: [
      <p>
        Although The Glenlivet is widely believed to be the oldest operational
        distillery in Scotland, it isn’t. That honour goes to Strathisla, while
        Glen Garioch could be even older. The Glenlivet was however one of the
        first to take out one of the new licences issued after the passing of
        the 1823 Excise Act which is accepted as being the starting point of the
        modern Scotch whisky industry.
      </p>,
      <p>
        George Smith was the man who did it. A farmer (which in those days in
        this region pretty much meant an illicit distiller), he had the ‘tack’
        [rent] of the Upper Drumin farm in the southern part of Glen Livet. As
        it was his landlord, the Duke of Gordon, who had helped to push the Act
        through, there was little chance that Smith wouldn’t get a knock on the
        door from the Duke’s factors ‘persuading’ him to mend his ways.
      </p>,
      <p>
        Not that this was without danger. Whisky smuggling had been underway for
        almost 40 years by that time and the gangs were both well-established
        and relatively wealthy. Plenty of the new distilleries were razed to the
        ground. George Smith famously travelled with a pair of pistols in case
        he was attacked by his former colleagues.
      </p>,
      <p>
        His venture was a success and his Glenlivet whisky – conceivably made in
        a lighter style even at this stage – became popular. As the money came
        in, he took the tacks of Minmore and Nevie and with demand rising, built
        a second distillery at nearby Delnabo in 1850. His Edinburgh agent,
        Andrew Usher, then released ‘OVG’ [Old Vatted Glenlivet] initially as a
        vatted malt and then the first recognised blend. Smith’s Glenlivet was
        at the core of both.
      </p>,
      <p>
        Since its humble beginnings, the Glenlivet brand sells over a million
        cases of scotch whisky a year (compared to less than 700 cases in the
        1950s). Current owners Chivas Brothers aims to make The Glenlivet the
        world's top selling single malt scotch.
      </p>,
    ],
    interestingFact: (
      <span>
        In the past, "Glenlivet" has been used as a name for the 'terroir' in
        the Speyside region, resulting in some older bottles of recognized
        brands (circa 1970s and 1980s) including the Glenlivet name (e.g.
        Macallan-Glenlivet, Balvenie-Glenlivet).
      </span>
    ),
  },
  {
    id: "glenmorangie",
    imageUrl: "/brand_logos/glenmorangie_logo.png",
    name: "Glenmorangie",
    region: "Highland",
    founded: 1843,
    desc: [
      <p>
        Situated next to the Dornoch Firth in a series of handsome red sandstone
        buildings, the Glenmorangie distillery started life as the local brewery
        for the town of Tain. In 1843, William Matheson converted it to a
        distillery and it remained in the family until 1887, when it was sold to
        the Glenmorangie Distillery Co, co-owned by the Maitland brothers and
        Duncan Cameron.
      </p>,
      <p>
        After the First World War, the business was sold to a partnership
        between two blending and broking firms, Macdonald & Muir and Durham &
        Co, soon passing entirely to the former, which used the whisky for
        blends such as Highland Queen. Although it was bottled in small
        quantities from the 1920s, a change of strategy in 1959 saw Glenmorangie
        revived as a single malt that soon became Scotland’s biggest seller.
      </p>,
      <p>
        Since 2004, Glenmorangie has been owned by French luxury goods firm
        Louis Vuitton Moet Hennessy (LMVH), who also ons the Arbeg brand.
      </p>,
    ],
    interestingFact: (
      <span>
        Glenmorangie uses the tallest stills of any distillery producing Scotch,
        at 8 meters tall (26'3").
      </span>
    ),
  },
  {
    id: "highland_park",
    imageUrl: "/brand_logos/highland_park_logo.webp",
    name: "Highland Park",
    region: "Islands",
    founded: 1798,
    desc: [
      <p>
        The origins of distilleries are often, as they should be, obscured by
        the clouds of half-truth and myth. Such is the case with Highland Park.
        Was it founded by famed priest turned smuggler Magnus Eunson, or by
        farmer David Robertson in 1798? The distillery’s ornate wrought ironwork
        gate certainly attests to the 1798 story.
      </p>,
      <p>
        Whatever the slight mystery over its origins, it is accepted that it
        wasn’t until the late 19th century that Kirkwall’s then only distillery
        found its feet properly in the 1870s under the ownership of first
        William Stuart [who owned Miltonduff] and from 1885 with his business
        partner James Grant (previously the manager of The Glenlivet) who took
        full control in 1895.
      </p>,
      <p>
        It first appeared as single malt in the late 1970s, as an
        eight-year-old, but the packaging was revamped in the 1980s (and
        repeatedly ever since) when the 12- and 18-year-old expressions were
        introduced. It soon built up a strong, even cult, following with the
        range expanding continually. As well as a core range with age
        statements, various series have been released themed around Orcadian
        history and Norse gods.
      </p>,
    ],
    interestingFact: (
      <span>
        Highland Park's distillery is the northernmost distillery in Scotland,
        as one of two distilleries on the island of Orkney.
      </span>
    ),
  },
  {
    id: "lagavulin",
    imageUrl: "/brand_logos/lagavulin_logo.webp",
    name: "Lagavulin",
    region: "Islay",
    founded: 1816,
    desc: [
      <p>
        Founded on Islay’s south [Kildalton] coast and situated between Ardbeg
        and Laphroaig, legal distilling was started at Lagavulin in 1816 by John
        Johnston. A second distillery shared the site which was first bought by
        the same family in 1825, before production was absorbed into Lagavulin
        in 1837.
      </p>,
      <p>
        It came to wider public awareness in 1862 when blender John Logan Mackie
        bought the distillery. His nephew Peter J. Mackie made the first of many
        trips to Islay in 1878 to learn the secrets of distilling and eventually
        take over production of Lagavulin. Sir Peter Mackie, as he became, was
        one of the pre-eminent figures of late 19th century whisky. He created
        the White Horse blend in 1890, co-founded Craigellachie distillery and
        was noted as a great innovator.
      </p>,
      <p>
        In 1908, irritated by the loss of the agency for Laphroaig, Mackie built
        a replica distillery at Lagavulin which he called Malt Mill. It ran
        until 1962 and though it was set up to produce the same character as
        Laphroaig – which is only two miles away – it never did. Neither did it
        make Lagavulin. A (fictitious) cask of Malt Mill played a central role
        in film director Ken Loach’s comedy The Angel’s Share.
      </p>,
    ],
    interestingFact: (
      <span>
        Lagavulin 16-year is the preferred scotch of{" "}
        <a href="https://en.wikipedia.org/wiki/Ron_Swanson" target="_blank">
          Ron Swanson
        </a>
        , a popular character from the TV series <i>Parks & Recreation</i>.
      </span>
    ),
  },
  {
    id: "laphroaig",
    imageUrl: "/brand_logos/laphroaig_logo.png",
    name: "Laphroaig",
    region: "Islay",
    founded: 1815,
    desc: [
      <p>
        The reason so many existing Islay distilleries came into being before
        the ‘official’ 1824 start date is down to the influence of Islay’s
        laird, Walker Frederick Campbell. Islay was less brutally cleared than
        other islands and as an ‘improving’ landlord Campbell was keen to start
        new businesses on the island. Islay already had a reputation for
        moonshine, so legal distilling made sense. The fact that Campbell was
        also actively involved meant that it was harder to continue with illicit
        activities.
      </p>,
      <p>
        So, in 1815, brothers Alexander and Donald Johnston built a distillery
        at Laphroaig. Donald, who ran the distillery, tragically died in 1847
        after falling into a vat of boiling pot ale. Laphroaig however remained
        in the control of D. Johnston & Co. until the 1960s.
      </p>,
      <p>
        Its rise to fame began at the start of the 20th century with the arrival
        of Donald's great-grandson, Ian Hunter. It was he who, in 1908, changed
        agent from Peter Mackie and prompted the building of Malt Mill. By the
        1920s Laphroaig was being sold as a single malt and in 1924, the number
        of stills were increased to four. On his death in 1954 he left the
        distillery to his secretary Bessie Williamson who had been the de-facto
        manager during his extensive international sales trips.
      </p>,
      <p>
        A period of passing through various hands and amalgamations ended when
        Jim Beam purchased it from Allied Distillers in 2005. Beam’s takeover by
        Suntory in 2014 has resulted in the Japanese-American giant now owning
        two of Islay’s eight distilleries.
      </p>,
    ],
    interestingFact: (
      <span>
        Laphroaig is the only Scotch whisky to carry the Royal Warrant of the
        Prince of Wales.
      </span>
    ),
  },
  {
    id: "macallan",
    imageUrl: "/brand_logos/macallan_logo.jpeg",
    name: "Macallan",
    region: "Speyside",
    founded: 1824,
    desc: [
      <p>
        The reason so many existing Islay distilleries came into being before
        the ‘official’ 1824 start date is down to the influence of Islay’s
        laird, Walker Frederick Campbell. Islay was less brutally cleared than
        other islands and as an ‘improving’ landlord Campbell was keen to start
        new businesses on the island. Islay already had a reputation for
        moonshine, so legal distilling made sense. The fact that Campbell was
        also actively involved meant that it was harder to continue with illicit
        activities.
      </p>,
      <p>
        So, in 1815, brothers Alexander and Donald Johnston built a distillery
        at Laphroaig. Donald, who ran the distillery, tragically died in 1847
        after falling into a vat of boiling pot ale. Laphroaig however remained
        in the control of D. Johnston & Co. until the 1960s.
      </p>,
      <p>
        Its rise to fame began at the start of the 20th century with the arrival
        of Donald's great-grandson, Ian Hunter. It was he who, in 1908, changed
        agent from Peter Mackie and prompted the building of Malt Mill. By the
        1920s Laphroaig was being sold as a single malt and in 1924, the number
        of stills were increased to four. On his death in 1954 he left the
        distillery to his secretary Bessie Williamson who had been the de-facto
        manager during his extensive international sales trips.
      </p>,
      <p>
        A period of passing through various hands and amalgamations ended when
        Jim Beam purchased it from Allied Distillers in 2005. Beam’s takeover by
        Suntory in 2014 has resulted in the Japanese-American giant now owning
        two of Islay’s eight distilleries.
      </p>,
    ],
    interestingFact: (
      <span>
        The Macallan estate at Easter Elchies is rumored to be haunted by the
        ghost of former boss Roderick Kemp, who was supposedly a bit of a
        difficult boss. Talk about workplace trauma!
      </span>
    ),
  },
  {
    id: "talisker",
    imageUrl: "/brand_logos/talisker_logo.png",
    name: "Talisker",
    region: "Islands",
    founded: 1830,
    desc: [
      <p>
        Talisker’s founders, brothers Hugh and Kenneth MacAskill were classic
        Clearance landlords. Having bought the tack [rent] of Talisker House on
        Skye and extensive lands in 1825, they set about forcibly shifting the
        resident population from their farms, either to new settlements at
        Carbost and Portnalong on the shores of Loch Harport and Portnalong, or
        off the island entirely.
      </p>,
      <p>
        As well as replacing subsistence farmers with more profitable sheep,
        another of the MacAskill’s money-making schemes was distilling. In 1830,
        they opened their Talisker distillery in Carbost using the cleared
        populace as its workforce.
      </p>,
      <p>
        Their venture into whisky-making was not a success and by 1848 the bank
        was in control. For the next three decades Talisker stumbled through a
        series of other owners who found it hard to keep afloat a distillery
        which is remote even by 21st century standards.
      </p>,
      <p>
        In 1880, Talisker’s fortunes changed when Roderick Kemp and Alexander
        Allen bought the distillery and proceeded to expand the site and
        construct a distillery pier – until then all the casks had to be floated
        out to waiting ships.
      </p>,
      <p>
        Kemp sold his share in 1892 in order to buy Macallan and on Allen’s
        death in 1895, his business partner Thomas Mackenzie took charge and
        three years later Talisker was formally merged with Dailuaine (and
        Imperial). When Mackenzie himself died in 1916, a grouping of major
        blenders, John Walker & Sons, John Dewar, W.P. Lowrie, and DCL took
        control, an indication as to the quality of the spirit. Talisker has
        remained within the same grouping (the firms all merged and eventually
        morphed into Diageo).
      </p>,
    ],
    interestingFact: (
      <span>
        In his poem "The Scotsman's Return From Abroad", Robert Louis Stevenson
        mentioned "
        <i>
          The king o' drinks, as I conceive it, Talisker, Islay, or Glenlivet.
        </i>
        ".
      </span>
    ),
  },
];

export const headers = [
  { id: "whisky", label: "Whisky" },
  { id: "type", label: "Type" },
  { id: "cost", label: "Cost" },
  { id: "tags", label: "Tags", disableSorting: true },
];

export const rangeValues = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$",
  5: "$$$$$",
  6: "$$$$$+",
};

export const searchTags = [
  "full-body",
  "medium-body",
  "light-body",
  "sweet",
  "semi-sweet",
  "heavy smoke",
  "pronounced sherry",
  "fruity",
  "malty",
  "apertif-style",
  "medium smoke",
  "pungent",
  "honey",
  "medicinal",
  "floral",
  "spicy",
  "nutty",
  "notes of wine",
  "no smoke",
  "light smoke",
];

export const rowsPerPageOptions = [5, 10, 25];
