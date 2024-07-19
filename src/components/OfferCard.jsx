import React from "react";
import AnimatedBanner from './AnimatedBanner';
import {Box, Heading, Text} from '@chakra-ui/react'

const OfferCard = () => {
  return (
    <>
    <Box p={4} textAlign={"center"} margin={"auto"}>
    <Heading >Some of the key highlights of Our Website</Heading>
      <Text> Visit our shop to see amazing products</Text>
    </Box>
  
    <div class="row" style={{ marginTop: "10px", marginBottom: "80px" }}>
      <div class="col-4">
        <nav
          id="navbar-example3"
          class="h-100 flex-column align-items-stretch pe-4 border-end"
        >
          <nav class="nav nav-pills flex-column">
            <a class="nav-link" href="#item-1">
              Key Highlights:
            </a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ms-3 my-1" href="#item-1-1">
                Introduction
              </a>
              <a class="nav-link ms-3 my-1" href="#item-1-2">
                Oregano Oil as Nature’s Antibiotic
              </a>
            </nav>
            <a class="nav-link" href="#item-2">
              UnderstandingOregano Oil and its Uses
            </a>
            <a class="nav-link" href="#item-3">
              How is Bacteria killed by Oregano Oil?
            </a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ms-3 my-1" href="#item-3-1">
                Potential Health Benefits of Oregano Oil
              </a>
              <a class="nav-link ms-3 my-1" href="#item-3-2">
                Oregano Oil for Easing Pain
              </a>
            </nav>
          </nav>
        </nav>
      </div>

      <div class="col-8">
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          class="scrollspy-example-2"
          tabindex="0"
        >
          <div id="item-1">
            <h4>Key Highlights:</h4>
            <ul>
              <li>
                Oregano oil is a natural antibiotic, and antifungal, and holds
                anti-inflammatory features.{" "}
              </li>
              <li>
                Studies show that oregano oil could work against bacteria, yeast
                infections, and gut health problems.
              </li>
              <li>
                Other potential benefits are its antioxidant, pain-easing,
                cancer-fighting properties, and possible weight loss benefits.{" "}
              </li>
              <li>
                Oregano oil comes in various forms like tinctures, capsules, and
                essential oils.{" "}
              </li>
              <li>
                It’s usually safe, but it’s key to know the possible side
                effects and care needed when using oregano oil.
              </li>
            </ul>
          </div>
          <div id="item-1-1">
            <h5> Introduction :</h5>
            <p>
              Oregano oil hails from the oregano plant. This is a steady herb in
              the mint family. It’s been used over the years for its medicinal
              powers. This oil is packed with antioxidants. Add to this are its
              anti-inflammatory, antibacterial, and antifungal properties. It
              has vital ingredients like carvacrol, thymol, terpene, and
              rosmarinic acid. These together are responsible for its many
              potential health benefits. In this article, we’ll dive into the
              potential health benefits of oregano oil backed by science. We’ll
              discuss its natural antibiotic effect. We’ll look at its use for
              yeast infections and gut health. We’ll showcase its antioxidant,
              pain-easing, and possibly cancer-fighting properties.
              Additionally, we’ll study the safe ways to apply oregano oil and
              any risks you should know of.{" "}
            </p>
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/04/28075712/591-741x452.jpg"/>
          </div>
          <div id="item-1-2">
            <h5> Oregano Oil as Nature’s Antibiotic</h5>
            <p>
              People have taken an interest in oregano oil’s antimicrobial
              properties. These could fight bacterial infections. The main
              reason is carvacrol. It’s found in large amounts in oregano oil.
              How is Bacteria killed by Oregano Oil? Carvacrol is a strong
              phenol. Studies show it breaks down bacterial cell membranes. Then
              comes cell death. So, it’s a strong tool against many bacterial
              types that cause lung infections, UTIs, and tooth decay.{" "}
            </p>
          </div>
          <div id="item-2">
            <h4>1. Oregano Oil as Nature’s Antibiotic </h4>
            <p>...</p>
          </div>
          <div id="item-3">
            <p>
              People have taken an interest in oregano oil’s antimicrobial
              properties. These could fight bacterial infections. The main
              reason is carvacrol. It’s found in large amounts in oregano oil.{" "}
            </p>
            <ul>
              <li>
                {" "}
                <h4>How is Bacteria killed by Oregano Oil? </h4>
              </li>
              <p>
                Carvacrol is a strong phenol. Studies show it breaks down
                bacterial cell membranes. Then comes cell death. So, it’s a
                strong tool against many bacterial types that cause lung
                infections, UTIs, and tooth decay. Evidence of Oregano Oil
                Effects Against Diverse Bacteria Many studies have underlined
                the power of oregano oil against many bacteria. These include E.
                coli and Salmonella types. Plus, it may fight
                antibiotic-resistant bacteria. But we still need more studies to
                find the best dosage and time of management.
              </p>
            </ul>
          </div>
          <div id="item-3-1">
            <h5>1. Oregano Oil as a Strong Antioxidant </h5>
            <p>
              Oregano oil is well known for its powerful antioxidant properties.
              These protect the body from the bad effects of free radicals and
              oxidative stress. Free radicals in high levels can speed up aging,
              hurt DNA, and cause cell death. Oxidative stress also plays a part
              in many diseases. Some are cancer, heart disease, rheumatoid
              arthritis, and atherosclerosis. Both carvacrol and thymol act as
              strong antioxidants. Thus, oregano oil may help shield the body
              from the bad effects of free radicals and oxidative stress.
              Studies on the Antioxidant Power of Oregano Oil Studies comparing
              various herbs have placed oregano on top for having the most
              antioxidants. It has far more antioxidants than most fruits and
              vegetables based on weight. So, taking oregano oil may give you a
              concentrated dose of antioxidants. More studies are needed to
              corroborate its benefit in fighting these free radical induced
              chronic diseases.{" "}
            </p>
          </div>
          <div id="item-3-2">
            <h5>2. Oregano Oil for Easing Pain </h5>
            <p>
              One possible benefit of oregano oil is its proposed ability to
              ease pain. Early research has shown that carvacrol, one of the
              main ingredients of oregano oil, has analgesic properties. This
              makes it a good choice for natural pain relief. Pain-easing
              Effects of Oregano Oil Animal studies have mostly shown the
              pain-easing effects of oregano oil. Research done on male rats
              showed that water extract of oregano provided pain relief. It
              worked in a dose-dependent way. The more the animals took, the
              more pain relief they noticed. The researchers suggested that the
              GABAergic system may play a part in the antinociceptive effect.
              Though we need more human research, these first findings hint that
              oregano oil could offer potential pain-relief benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
    <AnimatedBanner/>
    </>
  );
};

export default OfferCard;
