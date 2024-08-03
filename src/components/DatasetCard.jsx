import React from 'react';
import { Image, Layers, Tag } from 'lucide-react';

function DatasetCard({ dataset }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <div className="h-40 bg-gray-600 flex items-center justify-center">
        <Image size={64} className="text-gray-400" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 truncate">{dataset.name}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-300">
          <div className="flex items-center">
            <Layers size={16} className="mr-1" />
            <span>{dataset.imageCount} images</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            <span>{dataset.classes.length} classes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatasetCard;