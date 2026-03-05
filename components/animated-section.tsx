"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export default function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
