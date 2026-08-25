"use client";

import { useState } from "react";

export function useNow(): Date | null {
  const [now] = useState<Date | null>(() =>
    typeof window === "undefined" ? null : new Date(),
  );
  return now;
}
