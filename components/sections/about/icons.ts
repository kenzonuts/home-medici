import {
  Baby,
  Eye,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import type {
  TrustItem,
  ValueItem,
  VisionMissionItem,
} from "@/constants/about";

export const visionMissionIconMap: Record<
  VisionMissionItem["icon"],
  LucideIcon
> = {
  vision: Eye,
  mission: Target,
};

export const valueIconMap: Record<ValueItem["icon"], LucideIcon> = {
  professional: Stethoscope,
  caring: HeartHandshake,
  safety: ShieldCheck,
  integrity: Scale,
  innovation: Lightbulb,
  comfort: Sparkles,
};

export const trustIconMap: Record<TrustItem["icon"], LucideIcon> = {
  family: Users,
  transparent: HandHeart,
  support: HeartHandshake,
  quality: Baby,
};
