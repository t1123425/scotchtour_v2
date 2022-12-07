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
      <div>
        Scotch whisky (often simply called Scotch) is malt whisky or grain
        whisky made in Scotland. Scotch whisky must be made in a manner
        specified by law.
      </div>,
      <div>
        All Scotch whisky was originally made from malted barley. Commercial
        distilleries began introducing whisky made from wheat and rye in the
        late 18th century. Scotch whisky is divided into five distinct
        categories: single malt Scotch whisky, single grain Scotch whisky,
        blended malt Scotch whisky (formerly called "vatted malt" or "pure
        malt"), blended grain Scotch whisky, and blended Scotch whisky.
      </div>,
      <div>
        All Scotch whisky must be aged in oak barrels for at least three years.
        Any age statement on a bottle of Scotch whisky, expressed in numerical
        form, must reflect the age of the youngest whisky used to produce that
        product. A whisky with an age statement is known as guaranteed-age
        whisky. A whisky without an age statement is known as a no age statement
        (NAS) whisky, the only guarantee being that all whisky contained in that
        bottle is at least three years old.
      </div>,
    ],
  },
  {
    title: "Comparison to Other Whiskies",
    imageUrl: "/whiskies.jpg",
    caption:
      "Multiple types of whiskies including bourbon, Scotch, rye, and Irish whisky.",
    description: [
      <div>
        Outside of Scotch whisky, there are several other types of whisky found
        all over the world. Some of the most commonly recognized whiskies
        include:`
      </div>,
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
      <div>
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
      </div>,
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
      <div>
        According to the Scotch Whisky Association, Scotch whisky evolved from a
        Scottish drink called uisge beatha, which means "water of life". The
        earliest record of distillation in Scotland occurred as long ago as
        1494, as documented in the Exchequer Rolls, which were records of royal
        income and expenditure. The quote above records eight bolls of malt
        given to Friar John Cor wherewith to make aqua vitae (Latin for "water
        of life," = uisge beatha) over the previous year. This would be enough
        for 1,500 bottles, which suggests that distillation was well-established
        by the late 15th century.
      </div>,
      <div>
        Initially, whisky was also consumed as a tonic for medicinal purposes.
        In 1505 the City of Edinburgh awarded the medical practitioners, The
        Guild of Surgeon Barbers, the rights to monopolize whisky in the city.
      </div>,
    ],
  },
  {
    title: "17th-18th Century",
    imageUrl: "/18th_century_scotch.jpg",
    caption: "An 18th Century distiller making Scotch whisky.",
    description: [
      <div>
        Whisky production was first taxed in 1644 by the Scottish Customs &
        Excise (known as Gougers), causing a rise in illicit whisky distilling
        in the country. This drove many distillers to move to rural areas such
        as the glens, highlands and islands to set up illicit stills and avoid
        paying duty on the whisky they produced. In 1690, Ferintosh Distillery
        became the first commercial whisky distillery in Scotland as a result of
        Duncan Forbes of Culloden gaining exemption from paying the whisky duty.
      </div>,
      <div>
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
      </div>,
    ],
  },
  {
    title: "19th Century",
    description: [
      <div>
        With an ever growing demand for whisky from outside the Scottish
        borders, unauthorised distillation was ubiquitous by the 1820s. Nearly
        half the whisky drunk in Scotland came from illicit stills, with no
        payment of duty, even though Excise Gaugers seized up to 14,000 illicit
        stills every year.
      </div>,
      <div>
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
      </div>,
      <div>
        Two events helped to increase whisky's popularity: first, the
        introduction in 1831 of the column still; the whisky produced with this
        process was generally less expensive to produce and also less intense
        and smoother, because a column still can perform the equivalent of
        multiple distillation steps in a continuous distillation process.
        Second, the phylloxera bug destroyed wine and cognac production in
        France in 1880.
      </div>,
    ],
  },
  {
    title: "20th Century",
    imageUrl: "/scotch_barrels.jpg",
    caption:
      "Distillers during the 20th Century realized that long-term storage in oak casks greatly improved the color, aroma and taste of whisky",
    description: [
      <div>
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
      </div>,
    ],
  },
];

export const processContent = [
  {
    title: "How Scotch Whisky is Made",
    imageUrl: "/whisky_process.jpg",
    description: [
      <div>
        Single malt Scotch whisky is made using an age old process, beautiful in
        its simplicity. It uses natural, raw ingredients: malted barley (and/or
        other grains), fresh spring water, and yeast.
      </div>,
      <div>
        Although traditional Scotch whisky is made from exlusively 100% malted
        barley, the repeal of the British Corn Laws in 1846 allowed Scottish
        distillers to begin creating blended whisky and grain whisky as scotch.
        In this guide, we will break down the similarities in both the malt
        whisky process (which utilizes a pot still) as well as the blended/grain
        whisky process (which utilizes a patent, or Coffey still).
      </div>,
    ],
  },
  {
    title: "Malting",
    imageUrl: "/malt.jpg",
    description: [
      <div>
        The barley is first screened to remove any foreign matter and then
        soaked for two or three days in tanks of water known as steeps. After
        this it is spread out on a concrete floor known as the malting floor and
        allowed to germinate. Germination may take from 8 to 12 days depending
        on the season of the year, the quality of the barley used and other
        factors. During germination the barley secretes the enzyme diastase
        which makes the starch in the barley soluble, thus preparing it for
        conversion into sugar. Throughout this period the barley must be turned
        at regular intervals to control the temperature and rate of germination.
      </div>,
      <div>
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
      </div>,
    ],
  },
  {
    title: "Mashing",
    imageUrl: "/mash.jpg",
    description: [
      <div>
        The dried malt is ground in a mill and the grist, as it is now called.
        is mixed with hot water in a large circular vessel called a mash tun.
        The soluble starch is thus converted into a sugary liquid known as wort.
        This is drawn off from the mash tun and the solids remaining are removed
        for use as cattle food.
      </div>,
      <div>
        For blended and single-grain scotch, the mash includes (or solely
        consists of) unmalted cereals, respectively. Any unmalted cereals used
        are cooked under steam pressure in Converters for about 3.5 hours.
        During this time the mixture of grain and water is agitated by stirrers
        inside the cooker. The starch cells in the grain burst and when this
        liquid is transferred to the mash tun, with the malted barley, the
        diastase in the latter converts the starch into sugar.
      </div>,
    ],
  },
  {
    title: "Fermentation",
    imageUrl: "/ferment.jpg",
    description: [
      <div>
        After cooling, the wort is passed into large vessels holding anything
        from 9,000 to 45,000 litres of liquid where it is fermented by the
        addition of yeast. For single-grain and blended scotch, the wort is
        collected at a specific gravity lower than in the case of the Pot Still
        process. The living yeast attacks the sugar in the wort and converts it
        into crude alcohol. Fermentation takes about 48 hours and produces a
        liquid known as wash, containing alcohol of low strength, some
        unfermentable matter and certain by-products of fermentation.
      </div>,
    ],
  },
  {
    title: "Distillation",
    imageUrl: "/distill.jpg",
    description: [
      <div>
        Malt Whisky is distilled twice in large copper Pot Stills. The liquid
        wash is heated to a point at which the alcohol becomes vapor. This rises
        up the still and is passed into the cooling plant where it is condensed
        into liquid state. The cooling plant may take the form of a coiled
        copper tube or worm that is kept in continuously running cold water, or
        it may be another type of condenser.
      </div>,
      <div>
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
      </div>,
      <div>
        For single-grain and blended whiskies, distillation is carried out in a
        patent or Coffey still and the spirit collected at a much higher
        strength.
      </div>,
    ],
  },
  {
    title: "Maturation",
    imageUrl: "/scotch_barrels_2.jpg",
    caption:
      "By Scottish law, any whisky to be considered scotch whisky must be aged in oak barrels for at least three years.",
    description: [
      <div>
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
      </div>,
    ],
  },
  {
    title: "Blending",
    description: [
      <div>
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
      </div>,
    ],
  },
  {
    title: "Packaging & Labeling",
    imageUrl: "/scotch_label.jpeg",
    description: [
      <div>
        The final stage in production of Scotch Whisky is labelling and
        packaging. Most Scotch Whiskies are marketed at home and abroad in
        branded bottles. A Scotch whisky label comprises several elements that
        indicate aspects of production, age, bottling, and ownership. Some of
        these elements are regulated by the Scotch Whisky Regulations (SWR), and
        some reflect tradition and marketing.
      </div>,
      <div>
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
      </div>,
      <div>
        The brand name featured on the label is usually the same as the
        distillery name (for example, the Talisker Distillery labels its
        whiskies with the Talisker name).In addition to requiring that Scotch
        whisky be distilled in Scotland, the SWR require that it also be bottled
        and labelled in Scotland. Labels may also indicate the region of the
        distillery (for example, Islay or Speyside).
      </div>,
      <div>
        Alcoholic strength is expressed on the label with "Alcohol By Volume"
        ("ABV") or sometimes simply "Vol". Typically, bottled whisky is between
        40% and 46% ABV. Whisky is considerably stronger when first emerging
        from the cask—normally 60–63% ABV. Water is then added to create the
        desired bottling strength. If the whisky is not diluted before bottling,
        it can be labelled as cask strength.
      </div>,
      <div>
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
      </div>,
      <div>
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
      </div>,
    ],
  },
];
