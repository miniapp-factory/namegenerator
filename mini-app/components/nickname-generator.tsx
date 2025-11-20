"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export default function NicknameGenerator() {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string | null>(null);

  const adjectives = [
    "Silly",
    "Crazy",
    "Wacky",
    "Zany",
    "Quirky",
    "Bouncy",
    "Funky",
    "Merry",
    "Jolly",
    "Cheery",
  ];
  const nouns = [
    "Penguin",
    "Unicorn",
    "Ninja",
    "Wizard",
    "Pirate",
    "Robot",
    "Dragon",
    "Giraffe",
    "Elephant",
    "Cactus",
  ];

  const generateNickname = () => {
    if (!name.trim()) return;
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    setNickname(`${adj} ${noun}`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h2 className="text-xl font-semibold">Nickname Generator</h2>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <Button onClick={generateNickname} variant="outline" className="w-full">
          Generate Nickname
        </Button>
      </CardContent>
      {nickname && (
        <CardFooter>
          <p className="text-center text-lg font-medium">
            Your nickname: <span className="font-bold">{nickname}</span>
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
