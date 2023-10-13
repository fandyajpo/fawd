import Link from "next/link";
import Image from "next/image";
import { KonselingUser } from "@/types/interface";
import { INSTAGRAM, TIKTOK } from "@/components/svg";
import { useState } from "react";
import KonselingModal from "@/components/modal/modal-konseling";
const KonselingCard = (props: KonselingUser) => {
  const [state, setState] = useState(false);
  return (
    <>
      <KonselingModal
        open={state}
        setOpen={setState}
        title={"Profile"}
        content={"cs"}
      >
        <div className="flex gap-6">
          <Image
            className="h-24 w-24 rounded-full"
            src={props.image}
            alt="core"
            width={500}
            height={500}
          />
          <div className="">
            <a href="#">
              <h5 className="mb-2 md:text-base text-sm font-bold tracking-tight text-gray-900 break-words">
                {props.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray600 text-xs">
              {props.description}
            </p>
          </div>
        </div>
      </KonselingModal>
      <div className="bg-white border border-gray-200  flex-none relative rounded-lg hover:shadow-md shadow max-w-sm p-4">
        <div className=" flex gap-2 ">
          <Image
            className="h-24 w-24 rounded-full"
            src={props.image}
            alt="core"
            width={500}
            height={500}
          />
          <div className="h-24">
            <a href="#">
              <h5 className="mb-2 md:text-base text-sm font-bold tracking-tight text-gray-900 break-words">
                {props.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray600 text-xs">
              {props.description && props.description.length > 80
                ? props?.description.substring(0, 80) + "..."
                : props.description}
              <span
                role="button"
                onClick={() => setState((r) => !r)}
                className="text-xs text-blue-500"
              >
                Selengkapnya
              </span>
            </p>

            <div className="w-full flex justify-end pt-4"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-4 pt-2">
            <Link target="_blank" rel="noopener noreferrer" href={props.tiktok}>
              <TIKTOK className="w-6 h-6" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={props.instagram}
            >
              <INSTAGRAM className="w-6 h-6" />
            </Link>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={props.number}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500"
          >
            Curhat
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default KonselingCard;
