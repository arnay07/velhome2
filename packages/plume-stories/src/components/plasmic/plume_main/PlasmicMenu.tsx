// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tH77ekFNugan8Yv3d3xJez
// Component: Xaa7JeNCa3
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import Menu__Overlay from "../../menu/Menu__Overlay"; // plasmic-import: zoBnz9dTlBI/component
import Menu__Item from "../../menu/Menu__Item"; // plasmic-import: 8a55O6uuZe/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plume_main.module.css"; // plasmic-import: tH77ekFNugan8Yv3d3xJez/projectcss
import * as sty from "./PlasmicMenu.module.css"; // plasmic-import: Xaa7JeNCa3/css

export type PlasmicMenu__VariantMembers = {};

export type PlasmicMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicMenu__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>("children");

export type PlasmicMenu__OverridesType = {
  root?: p.Flex<typeof Menu__Overlay>;
  itemsContainer?: p.Flex<"ul">;
};

export interface DefaultMenuProps extends p.BaseMenuProps {}

const PlasmicMenuContext = React.createContext<
  | undefined
  | { variants: PlasmicMenu__VariantsArgs; args: PlasmicMenu__ArgsType }
>(undefined);

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <PlasmicMenuContext.Provider value={{ variants, args }}>
      <Menu__Overlay
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames("__wab_instance", sty.root)}
      >
        <ul
          data-plasmic-name={"itemsContainer"}
          data-plasmic-override={overrides.itemsContainer}
          className={classNames(defaultcss.ul, sty.itemsContainer)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Menu__Item
                className={classNames("__wab_instance", sty.item__yqjkU)}
              />
            ),

            value: args.children,
          })}
        </ul>
      </Menu__Overlay>
    </PlasmicMenuContext.Provider>
  ) as React.ReactElement | null;
}

function useBehavior<P extends p.BaseMenuProps>(props: P, ref: p.MenuRef) {
  props = {
    ...props,
    ...(!props.children && {
      children: (
        <Menu__Item className={classNames("__wab_instance", sty.item__yqjkU)} />
      ),
    }),
  };

  return p.useMenu(
    PlasmicMenu,
    props,
    {
      itemsSlot: "children",
      root: "root",
      itemsContainer: "itemsContainer",
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "itemsContainer"],
  itemsContainer: ["itemsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof Menu__Overlay;
  itemsContainer: "ul";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicMenu__VariantsArgs;
  args?: PlasmicMenu__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicMenu__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMenu__ArgProps,
      internalVariantPropNames: PlasmicMenu__VariantProps,
    });

    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    itemsContainer: makeNodeComponent("itemsContainer"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps,

    // Context for sub components
    Context: PlasmicMenuContext,

    useBehavior,
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */
