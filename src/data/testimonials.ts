export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Partner, Example Law LLP". */
  role: string;
  /** Optional link to the person's LinkedIn or company page. */
  url?: string;
};

/*
 * TODO: add real quotes here, with the person's permission. The testimonials
 * section stays hidden until this array has at least one entry. Never add a
 * placeholder or paraphrased quote.
 */
export const testimonials: Testimonial[] = [];
