import {
  Baby,
  ClipboardCheck,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Timer,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

import type {
  ProcessStep,
  ServiceAdvantage,
  ServiceIconKey,
} from "@/constants/services";

export const serviceIconMap: Record<ServiceIconKey, LucideIcon> = {
  baby: Baby,
  child: HeartHandshake,
  adult: UserRound,
  hypnosis: Sparkles,
  treatment: Syringe,
  consult: Stethoscope,
};

export const processIconMap: Record<ProcessStep["icon"], LucideIcon> = {
  consult: ClipboardCheck,
  exam: Stethoscope,
  treat: HeartPulse,
  recover: HeartHandshake,
};

export const advantageIconMap: Record<ServiceAdvantage["icon"], LucideIcon> = {
  equipment: Sparkles,
  team: Users,
  sterile: ShieldCheck,
  facility: HeartHandshake,
  friendly: HeartHandshake,
  fast: Timer,
};
