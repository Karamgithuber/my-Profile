import React from 'react';

export interface Job {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  link?: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: string[];
}

export interface Stat {
  label: string;
  value: string;
  subtext?: string;
}