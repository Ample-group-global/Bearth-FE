"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { XIcon } from "lucide-react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import BearthBadge from "../BearthBadge";
import { cn } from "@/lib/utils";

const items = [
  {
    id: 1,
    number: "1",
    title: "Vision\n& Value",
    contentTitle: "Vision & Value",
    desktop2Line: true,
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <Heading type="h4" as="h2">
            Our Vision
          </Heading>
          <Paragraph type="normal2">
            Create a healing universe where loss transforms into creation, and
            every being finds their place among the stars.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-1">
          <Heading type="h4" as="h2">
            Our Values
          </Heading>

          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Healing First
          </Heading>
          <Paragraph type="normal2">
            Bearth began with a story of loss and rebirth. We believe art and
            creation can heal hearts, allowing precious memories to live on in
            new forms.
          </Paragraph>

          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Coexistence over competition
          </Heading>
          <Paragraph type="normal2">
            Like the Bear Tribe’s laid-back philosophy, we believe the best
            future isn’t about fighting for space—it’s about finding a planet
            where everyone can nap comfortably. We choose collaboration over
            conflict, community over conquest.
          </Paragraph>

          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Build with intention
          </Heading>
          <Paragraph type="normal2">
            Inspired by architectural thinking, every detail of Bearth is
            thoughtfully designed. We don’t chase speed; we chase meaning. Good
            things take time, and we’re here for the long journey.
          </Paragraph>

          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Sustainability in action
          </Heading>
          <Paragraph type="normal2">
            Sustainability isn't a buzzword—it's a commitment woven into every
            decision. From eco-friendly materials to responsible production, our
            actions speak louder than words.
          </Paragraph>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    number: "2",
    title: "Community",
    desktop2Line: true,
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <Paragraph type="normal2">
            We are the travelers of the cosmos, navigating the space between
            loss and creation, between loneliness and belonging. We're making an
            impact on web3 culture through warmth, not noise.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-1">
          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Empowering Creators
          </Heading>
          <Paragraph type="normal2">
            We empower creatives from within, building infrastructure to surface
            and support artists, storytellers, musicians, and dreamers of all
            kinds.
          </Paragraph>

          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Standing for Values
          </Heading>
          <Paragraph type="normal2">
            Our community stands for healing, coexistence, and intentional
            creation. We lead and support movements that share our vision of a
            kinder, more thoughtful web3.
          </Paragraph>

          <Heading type="h5" as="h3" className="w-fit px-1 bg-[#ffff00]/50">
            Growing Together
          </Heading>
          <Paragraph type="normal2">
            We're recruiting Global Ambassadors and building governance
            structures that allow the community to shape Bearth's future. But
            we're not rushing—we're trusting the process.
          </Paragraph>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    number: "3",
    title: "Expand",
    desktop2Line: true,
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <Paragraph type="normal2">
            Growth isn’t about rushing—it’s about finding the right rhythm. Like
            the Fibonacci sequence that guides our minting phases, Bearth
            expands organically, one thoughtful step at a time.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-1">
          <Heading type="h5" as="h3">
            Phased Minting <BearthBadge color="green">In Progress</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're minting 9,999 NFTs across seven Fibonacci-sequenced phases:
            303, 303, 606, 909, 1515, 2424, 3939. Currently in Phase 1 & Phase 2
            (303 + 303 NFTs), we're laying the foundation for a universe that
            will welcome nearly 10,000 travelers.
          </Paragraph>

          <Heading type="h5" as="h3">
            Ambassador Program{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2" as="div">
            Ambassadors are co-creators and community builders who help Bearth
            find home worldwide. We're seeking:
            <ul className="list-disc pl-8 [&>li::marker]:text-xs">
              <li>
                Community Builders - Organize local meet-ups and gatherings
              </li>
              <li>
                Story Tellers - Create content and share personal journeys
              </li>
              <li>
                Brand Advocates - Represent Bearth authentically on social media
              </li>
            </ul>
          </Paragraph>

          <Heading type="h5" as="h3">
            Partnerships <BearthBadge color="green">In Progress</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're exploring collaborations with artists, brands, and projects
            that share our values, helping us reach new audiences while staying
            true to our mission.
          </Paragraph>

          <Heading type="h5" as="h3">
            Decentralized Governance{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            As our community matures, we're building toward a DAO structure that
            empowers holders to shape Bearth's future through collective
            decision-making.
          </Paragraph>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    number: "4",
    title: "Digital",
    desktop2Line: false,
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <Paragraph type="normal2">
            Where is the metaverse today, and where is it going? For us, the
            metaverse is wherever our community gathers—Discord, Twitter, and
            soon, our own digital home.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-1">
          <Heading type="h5" as="h3">
            The City <BearthBadge color="green">In Progress</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're building Bearth's own metaverse where holders can gather,
            explore, and showcase their NFTs in an immersive 3D environment.
          </Paragraph>

          <Heading type="h5" as="h3">
            3D Characters <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            Every Bear will have a 3D version for use across multiple
            metaverses. Your Bear is a traveler, just like you—free to explore
            wherever the journey leads.
          </Paragraph>

          <Heading type="h5" as="h3">
            Digital Experiences{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're exploring interactive experiences, mini-games, and
            storytelling formats that make the digital universe feel alive.
          </Paragraph>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    number: "5",
    title: "Physical",
    desktop2Line: false,
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <Paragraph type="normal2">
            The physical world is where Bearth comes to life in your hands.
            Inspired by the success of projects like Pudgy Penguins, we’re
            focusing on creating high-quality, collectible products that bring
            joy and comfort to everyday life.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-1">
          <Heading type="h5" as="h3">
            Toys & Collectibles{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're creating high-quality Bear Tribe toys and collectibles that
            bring joy and comfort. These aren't just merchandise—they're
            companions that make the universe tangible.
          </Paragraph>

          <Heading type="h5" as="h3">
            Phygital Products{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            Purchase a toy, receive an NFT. That NFT unlocks future experiences
            and utilities within the Bearth ecosystem.
          </Paragraph>

          <Heading type="h5" as="h3">
            Sustainable Production{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            Every product uses eco-friendly materials and ethical manufacturing.
            Our values aren't just digital.
          </Paragraph>

          <Heading type="h5" as="h3">
            Beyond Toys <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're exploring apparel, art prints, and home goods that bring
            Bearth into daily life.
          </Paragraph>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    number: "6",
    title: "Hybrid",
    desktop2Line: false,
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <Paragraph type="normal2">
            The bridge between physical and digital worlds is where magic
            happens. We experiment with new forms of media and interaction that
            blur boundaries.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-1">
          <Heading type="h5" as="h3">
            Meta-games <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            Micro-actions and community games that unlock new experiences,
            spanning both physical locations and digital spaces.
          </Paragraph>

          <Heading type="h5" as="h3">
            AR/VR Experiences{" "}
            <BearthBadge color="yellow">Exploring</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            Augmented and virtual reality bring Bearth into your living room or
            transport you into The City.
          </Paragraph>

          <Heading type="h5" as="h3">
            Interactive Storytelling{" "}
            <BearthBadge color="green">In Progress</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            Imagine an RPG where the community shapes the narrative, or animated
            shorts where your Bear plays a role.
          </Paragraph>

          <Heading type="h5" as="h3">
            Phygital Collectibles{" "}
            <BearthBadge color="green">In Progress</BearthBadge>
          </Heading>
          <Paragraph type="normal2">
            We're creating products that seamlessly blend physical and
            digital—collectibles that exist in both worlds and unlock
            experiences in each.
          </Paragraph>
        </div>
      </div>
    ),
  },
];

export default function MindmapGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const expandedItem = items.find((i) => i.id === expandedId);

  const getGridClasses = (index: number): string => {
    // Mobile: 2 columns, items flow naturally
    // Desktop: complex spanning layout
    const desktopPositions = [
      "lg:[grid-column:1] lg:[grid-row:1/7]",
      "lg:[grid-column:2] lg:[grid-row:1/4]",
      "lg:[grid-column:2] lg:[grid-row:4/7]",
      "lg:[grid-column:3] lg:[grid-row:1/3]",
      "lg:[grid-column:3] lg:[grid-row:3/5]",
      "lg:[grid-column:3] lg:[grid-row:5/7]",
    ];
    return desktopPositions[index] || "";
  };

  return (
    <div className="w-full lg:h-[600px]">
      <div className="mx-auto h-full">
        <div className="relative h-full">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:grid-rows-6 h-full">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                className={`relative cursor-pointer overflow-hidden rounded-xl aspect-square lg:aspect-auto lg:rounded-2xl z-0 bg-[#EBE7E0] shadow-[3px_3px_4px_0px_#00000040_inset] ${getGridClasses(index)}`}
                onClick={() => setExpandedId(item.id)}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image
                  src="/assets/mindmap-item-placeholder-filled.png"
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="-z-1 object-cover lg:hidden mix-blend-darken"
                ></Image>
                <div
                  className={cn(
                    "relative flex h-full w-full p-4 justify-between lg:items-start lg:justify-end lg:p-6 lg:text-left flex-col",
                    !item.desktop2Line && "lg:items-center lg:justify-start lg:gap-6 lg:flex-row",
                  )}
                >
                  <motion.div
                    layoutId={`number-${item.id}`}
                    className="text-3xl font-semibold text-[#2d3748] lg:text-[80px]"
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {item.number}
                  </motion.div>
                  <motion.h2
                    layoutId={`title-${item.id}`}
                    className="mt-2 whitespace-pre-line text-sm font-semibold text-[#2d3748] text-right lg:text-left lg:mt-1 lg:text-[60px]"
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {item.title}
                  </motion.h2>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {expandedId !== null && expandedItem && (
              <motion.div
                layoutId={`card-${expandedId}`}
                className="absolute inset-0 overflow-hidden rounded-2xl flex flex-row bg-[#EBE7E0] z-10"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute top-4 right-4 text-black cursor-pointer z-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedId(null);
                  }}
                >
                  <XIcon className="size-12" />
                </motion.button>
                <div className="relative flex lg:flex-3 h-full w-full flex-col p-4 lg:p-8">
                  <motion.h1
                    layoutId={`title-${expandedId}`}
                    className="mb-4 whitespace-pre-line text-3xl font-bold text-secondary pb-2 lg:text-6xl border-b border-black"
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {expandedItem.contentTitle ?? expandedItem.title}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-black overflow-y-auto"
                  >
                    {expandedItem.content}
                  </motion.div>
                </div>
                <div className="hidden lg:flex relative lg:flex-2 w-full h-full pointer-events-none">
                  <Image
                    src="/assets/mindmap-item-placeholder-outline.png"
                    alt={expandedItem.title}
                    fill
                    sizes="50vw"
                    className="-z-1 object-cover mix-blend-darken"
                  ></Image>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
