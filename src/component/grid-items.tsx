import React, { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  gridColumns: number;
}
export default function GridItems({ gridColumns, children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gap: 10,
      }}
    >
      {children}
    </div>
  );
}
