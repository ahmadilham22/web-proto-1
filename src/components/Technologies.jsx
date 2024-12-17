import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import {
  TbBrandCss3,
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandPhp,
} from 'react-icons/tb';

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-24 text-center  text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </div>
        <div className="p-4">
          <TbBrandJavascript className="text-7xl text-yellow-500 "></TbBrandJavascript>
        </div>
        <div className="p-4">
          <TbBrandHtml5 className="text-7xl text-orange-600"></TbBrandHtml5>
        </div>
        <div className="p-4">
          <TbBrandPhp className="text-7xl text-indigo-600"></TbBrandPhp>
        </div>
        <div className="p-4">
          <TbBrandNodejs className="text-7xl text-green-600"></TbBrandNodejs>
        </div>
        <div className="p-4">
          <TbBrandLaravel className="text-7xl text-red-600"></TbBrandLaravel>
        </div>
        <div className="p-4">
          <TbBrandMysql className="text-7xl text-blue-600"></TbBrandMysql>
        </div>
        <div className="p-4">
          <TbBrandGithub className="text-7xl text-gray-700"></TbBrandGithub>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
