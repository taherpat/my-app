import React, { useState } from 'react';
import { X, ChevronDown, Copy } from 'lucide-react';

const ImageDetailsModal = ({ image, onClose }) => {
  const [selectedFormat, setSelectedFormat] = useState('annotations_json');
  const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false);

  if (!image) return null;

  const formats = {
    'annotations_json': '{x:0, y: 0, w: 0, h: 0}',
    'coco': '{"image_id": 1, "category_id": 1, "bbox": [0, 0, 0, 0]}',
    'yolo': '0 0.5 0.5 0.1 0.1'
  };

  return (
    <div className="fixed inset-0 bg-[#0B1021] bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className="bg-[#0B1021] rounded-lg w-full max-w-2xl relative" 
        style={{  boxShadow: '0 0 20px 5px rgba(126, 88, 188, 0.5)' }} // Custom shadow color
      >
        <div className="flex">
          <div className="w-1/2 relative">
            <div className="bg-black rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
            <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-75 px-2 py-1 rounded text-sm">
              {image.filename}
            </div>
            
          </div>
         
          
          <div className="w-1/2 p-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-gray-400">Class:</p>
              <p>{image.class}</p> 
              <p className="text-gray-400">Size:</p>
              <p>{image.size}</p>
              <p className="text-gray-400">Resolution:</p>
              <p>{image.resolution}</p>
              <p className="text-gray-400">Annotated:</p>
              <p>{image.annotated}</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 mb-2">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}

              </div>
            </div>
          </div>
        </div>
        
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold">Formats</span>
            <div className="relative">
              <button 
                className="bg-gray-700 text-white px-3 py-1 rounded-md flex items-center text-sm"
                onClick={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
              >
                {selectedFormat} <ChevronDown size={16} className="ml-2" />
              </button>
              {isFormatDropdownOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-[#0B1021] rounded-md shadow-lg z-10">
                  {Object.keys(formats).map((format) => (
                    <button
                      key={format}
                      className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-[#7E58BC]"
                      onClick={() => {
                        setSelectedFormat(format);
                        setIsFormatDropdownOpen(false);
                      }}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-black p-2 rounded-md flex justify-between items-center">
            <code className="text-xs text-white">{formats[selectedFormat]}</code>
            <button className="text-gray-400 hover:text-white">
              <Copy size={16} />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 border-t border-gray-700">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            Delete
          </button>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md text-sm">
            Annotate
          </button>
        </div>
        <X 
          onClick={onClose} 
          className="absolute top-2 right-2 w-4 h-4 cursor-pointer hover:bg-[#7E58BC]" 
        />
      </div>
    </div>
  );
};

export default ImageDetailsModal;