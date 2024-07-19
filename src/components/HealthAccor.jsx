import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
const HealthAccor = () => {


  
  // Define an array of objects for titles and contents
  const accordionData = [
    { title: 'What are benefits of Mednedhub', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    ` },
    { title: 'Health.....', content:`Yes, Extra 5% PharmEasy Credits for Plus members applies to allopathic medicines and healthcare products` },
    { title: 'Medication...', content:`Your PharmEasy Plus membership is valid for 3 months from the date of purchase of the program.` },
    // Add more items as needed
    { title: 'Why do we neet this??', content:`Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'Is this good ??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    ` },
    { title: 'Why are ee using', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `},
    { title: 'where can i buy??', content: 'Yes, PharmEasy Credits usage is capped at a maximum of 5% of the medicine order value..' },
    { title: 'Section 8 title', content: 'Yes, PharmEasy Credits usage is capped at a maximum of 5% of the medicine order value..' },
    { title: 'Why this is good??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    ` },
    { title: 'This has to be good??', content: 'Yes, PharmEasy Credits usage is capped at a maximum of 5% of the medicine order value.' },
    { title: 'So, what should i do??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `},
    { title: 'why do we need medication??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    ` },
    { title: 'Medicine title', content:`Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `},
    { title: 'S0 What are benefits of Mednedhub', content: 'Content for section 14.' },
    { title: 'How can we take precautions??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    ` },
    { title: 'why do we need medication??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'What are benefits of Mednedhub??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'where can i buy??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'How much does it cost??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'What are benefits of Mednedhub??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'Where to buy such easily??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'Why do we neet this??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    ` },
    { title: 'Why are ee using??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'Why Mednedhub is good??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'why to use proper medication??', content: `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
    { title: 'So, what should i do??', content:  `Plus members get an extra 5% PharmEasy Credits on medicine & healthcare orders with free delivery above ₹499. Also, there's an extra 50% PharmEasy Credits on 1st lab test and an additional 10% PharmEasy Credits on subsequent lab tests.
    `  },
  ];


  return (




    <Box>
 <Accordion allowMultiple>
        {accordionData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      
    </Box>
  )
}

export default HealthAccor
