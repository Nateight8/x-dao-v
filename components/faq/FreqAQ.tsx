import React from "react";
import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faq } from "@/lib/utils/Faq";

type Props = {};

function FreqAQ({}: Props) {
  return (
    <div>
      <section className="min-h-screen w-full p-4 top-0 flex items-center justify-center">
        <div className="faq grid md:grid-cols-3  w-full gap-6 max-w-3xl md:min-h-screen">
          <div className=" md:p-4 space-y-2">
            <H2>Frequently Asked Questions</H2>
            <P>
              Have a question that is not answered? you are invited to join us
              on discord
            </P>
          </div>
          <div className="col-start-2 col-span-full">
            <Accordion type="single" collapsible className="w-full">
              {/* <div className="space-y-2"> */}
              {faq.map((qes) => (
                <AccordionItem key={qes.id} value={qes.id} className="my-2">
                  <AccordionTrigger>{qes.quest}</AccordionTrigger>
                  <AccordionContent>
                    <P className="text-base whitespace-pre-line">{qes.ans}</P>
                  </AccordionContent>
                </AccordionItem>
              ))}
              {/* </div> */}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FreqAQ;
