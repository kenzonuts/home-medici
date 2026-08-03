import {
  Baby,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import type { FeatureItem, ServicePreview } from "@/constants/homepage";

export const serviceIconMap: Record<ServicePreview["icon"], LucideIcon> = {
  baby: Baby,
  child: HeartHandshake,
  adult: UserRound,
  hypnosis: Sparkles,
  treatment: Syringe,
  consult: Stethoscope,
};

export const featureIconMap: Record<FeatureItem["icon"], LucideIcon> = {
  doctor: Stethoscope,
  modern: Sparkles,
  comfort: HeartHandshake,
  friendly: HeartHandshake,
  fast: Clock3,
  sterile: ShieldCheck,
};
