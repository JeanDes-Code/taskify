"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

//? - This component is used to control the active organization dynamically using its id from the URL.
export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({ organization: params.organizationId as string });
  }, [setActive, params.organizationId]);

  return null;
};
