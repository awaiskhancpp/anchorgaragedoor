"use client";

import { useEffect, useState } from "react";

export default function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- current year must be read at request/visit time, not during prerender
    setYear(new Date().getFullYear());
  }, []);

  return <>{year ?? ""}</>;
}
