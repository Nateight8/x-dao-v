import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { P } from "../ui/paragraph";
import { H2 } from "../ui/h2";

function Faq() {
  const faq = [
    {
      id: "asd",
      quest: "What is VentureX DAO?",
      ans: "Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quisquamodio consequatur. Ab, commodi sint dolorem provident quisquaaliquam aut! Maiores beatae rem et fuga magni sapiente recusandae. Maiores.",
    },
    {
      id: "assd",
      quest: "How is the Price at Launch?",
      ans: "Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quisquamodio consequatur. Ab, commodi sint dolorem provident quisquaaliquam aut! Maiores beatae rem et fuga magni sapiente recusandae. Maiores.",
    },
    {
      id: "asda",
      quest: "What is VentureX DAO?",
      ans: "Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quisquamodio consequatur. Ab, commodi sint dolorem provident quisquaaliquam aut! Maiores beatae rem et fuga magni sapiente recusandae. Maiores.",
    },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="grid md:grid-cols-3 w-full gap-3 max-w-3xl min-h-screen">
        <div className="p-4 space-y-2">
          <H2>Frequently Asked Questions</H2>
          <P>
            Have a question that is not answered? you are invited to join us on
            discord
          </P>
        </div>
        <div className="col-start-2 col-span-full">
          <Accordion type="single" collapsible>
            <div className="space-y-2">
              {faq.map((qes) => (
                <AccordionItem key={qes.id} value={qes.id}>
                  <AccordionTrigger>{qes.quest}</AccordionTrigger>
                  <AccordionContent>
                    <P className="text-base">
                      Yes. It adheres to the WAI-ARIA design pattern. Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit. Minus
                      quisquam odio consequatur. Ab, commodi sint dolorem
                      provident quisquam unde aliquam aut! Maiores beatae rem et
                      fuga magni sapiente recusandae. Maiores.
                    </P>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
