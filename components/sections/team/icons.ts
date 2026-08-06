import {
  Baby,
  BadgeCheck,
  ClipboardCheck,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

import type {
  ExpertiseArea,
  QualificationItem,
  TeamTrustItem,
} from "@/constants/team";

export const qualificationIconMap: Record<
  QualificationItem["icon"],
  LucideIcon
> = {
  education: GraduationCap,
  certification: BadgeCheck,
  membership: Users,
  training: ClipboardCheck,
};

export const expertiseIconMap: Record<ExpertiseArea["icon"], LucideIcon> = {
  baby: Baby,
  child: HeartHandshake,
  adult: UserRound,
  consult: Stethoscope,
  treatment: Syringe,
};

export const teamTrustIconMap: Record<TeamTrustItem["icon"], LucideIcon> = {
  experienced: Stethoscope,
  certified: BadgeCheck,
  consultation: HeartHandshake,
  modern: Sparkles,
  safety: ShieldCheck,
  personalized: HandHeart,
};
