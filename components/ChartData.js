import {
  ratingLabels,
  interestLabels,
  brandData,
  regionButtons,
} from "../constants/siteContent";

export function SurveyChartData(whiskies, surveydata) {
  // Total Survey Responses
  const totalcount = surveydata.length;

  // Most Recognized Brands
  const brandraw = surveydata.map((obj) => obj["scotch-brands"]).flat(1);
  const recognizeddata = [...new Set(brandraw)]
    .map((brand) => ({
      name: brand,
      count: brandraw.filter((el) => el === brand).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Most Beloved Brands
  const favoriteraw = surveydata.map((obj) => obj["favorite-whisky"]);
  const beloveddata = [...new Set(favoriteraw)]
    .map((whisky) => ({
      name: whisky,
      count: favoriteraw.filter((el) => el === whisky).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Most Popular Regions
  const favwhiskyregions = favoriteraw.map((whisky) => ({
    name: whisky,
    region: brandData
      .filter((el) => new RegExp(el.name).test(whisky))
      .map((obj) => obj.region)[0],
  }));
  const popularregiondata = regionButtons.map((obj) => ({
    name: obj.name,
    count: favwhiskyregions.filter((el) => el.region === obj.name).length,
  }));

  // Scotch vs. other Types of whisky
  const comparedtoraw = surveydata.map((obj) => obj["interest-slider"]);
  const comparedtodata = Object.keys(interestLabels)
    .sort((a, b) => a - b)
    .map((el) => ({
      rating: el,
      count: comparedtoraw.filter((item) => item === Number(el)).length,
    }));

  // How People Feel About Scotch
  const hoverraw = surveydata.map((obj) => obj["hover-feedback"]);
  const hoverdata = Object.keys(ratingLabels)
    .sort((a, b) => a - b)
    .map((el) => ({
      rating: el,
      percent: (
        (hoverraw.filter((item) => item === Number(el)).length / totalcount) *
        100
      ).toFixed(2),
    }));

  // Best Whisky Notes
  const tagraw = favoriteraw
    .map((el) => ({
      name: el,
      tags: whiskies
        .filter((obj) => obj.whisky === el)
        .map((obj) => obj.tags)[0],
    }))
    .map((obj) => obj.tags)
    .flat(1);
  const whiskynotedata = [...new Set(tagraw)]
    .map((el) => ({
      flavor: el,
      count: tagraw.filter((item) => item === el).length,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    totalcount,
    recognizeddata,
    beloveddata,
    popularregiondata,
    comparedtodata,
    hoverdata,
    whiskynotedata,
  };
}

export function HistoryChartData() {
  // Total Distilleries w/ Opens + Closures Timeline
  const yearraw = [
    ...new Set(
      brandData
        .map((obj) => ({ year: obj.founded }))
        .concat(
          brandData
            .filter((obj) => obj.closed !== "")
            .map((obj) => ({ year: obj.closed }))
        )
        .map((obj) => obj.year)
    ),
  ]
    .sort((a, b) => a - b)
    .map((el) => ({
      year: el,
    }))
    .map((obj) => ({
      year: obj.year,
      opencount: brandData.filter((el) => el.founded === obj.year).length,
      closedcount: brandData.filter((el) => el.closed === obj.year).length,
    }))
    .map((obj) => ({
      ...obj,
      totalcount: obj.opencount - obj.closedcount,
    }));

  const yeardata = yearraw.map((obj) => ({
    ...obj,
    cumulativecount: yearraw.reduce((acc, curr) => {
      if (curr.year <= obj.year) return acc + curr.totalcount;
      else return acc;
    }, 0),
  }));

  return {
    yeardata,
  };
}

export function RegionChartData() {
  // Total Distilleries by Region
  const totalregiondata = regionButtons.map((obj) => ({
    region: obj.name,
    count: brandData.filter((el) => el.region === obj.name).length,
  }));

  return {
    totalregiondata,
  };
}
