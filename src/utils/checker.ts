interface IProps {
  sec0: string | undefined;
  sec1: string | undefined;
  sec2: string | undefined;
  sec3: string | undefined;
  sec4: string | undefined;
  sec5: string | undefined;
  sec6: string | undefined;
  sec7: string | undefined;
  sec8: string | undefined;
}

export default function checker(list: IProps): "win" | false | "nores" {
  if (
    list.sec0 === list.sec1 &&
    list.sec1 === list.sec2 &&
    list.sec0 !== undefined &&
    list.sec1 !== undefined &&
    list.sec2 !== undefined
  ) {
    return "win";
  } else if (
    list.sec0 === list.sec3 &&
    list.sec3 === list.sec6 &&
    list.sec0 !== undefined &&
    list.sec3 !== undefined &&
    list.sec6 !== undefined
  ) {
    return "win";
  } else if (
    list.sec0 === list.sec4 &&
    list.sec4 === list.sec8 &&
    list.sec0 !== undefined &&
    list.sec4 !== undefined &&
    list.sec8 !== undefined
  ) {
    return "win";
  } else if (
    list.sec3 === list.sec4 &&
    list.sec4 === list.sec5 &&
    list.sec3 !== undefined &&
    list.sec4 !== undefined &&
    list.sec5 !== undefined
  ) {
    return "win";
  } else if (
    list.sec6 === list.sec7 &&
    list.sec7 === list.sec8 &&
    list.sec6 !== undefined &&
    list.sec7 !== undefined &&
    list.sec8 !== undefined
  ) {
    return "win";
  } else if (
    list.sec6 === list.sec4 &&
    list.sec4 === list.sec2 &&
    list.sec6 !== undefined &&
    list.sec4 !== undefined &&
    list.sec2 !== undefined
  ) {
    return "win";
  } else if (
    list.sec1 === list.sec4 &&
    list.sec4 === list.sec7 &&
    list.sec1 !== undefined &&
    list.sec4 !== undefined &&
    list.sec7 !== undefined
  ) {
    return "win";
  } else if (
    list.sec2 === list.sec5 &&
    list.sec5 === list.sec8 &&
    list.sec2 !== undefined &&
    list.sec5 !== undefined &&
    list.sec8 !== undefined
  ) {
    return "win";
  } else if (
    list.sec0 !== undefined &&
    list.sec1 !== undefined &&
    list.sec2 !== undefined &&
    list.sec3 !== undefined &&
    list.sec4 !== undefined &&
    list.sec5 !== undefined &&
    list.sec6 !== undefined &&
    list.sec7 !== undefined &&
    list.sec8 !== undefined
  ) {
    return "nores";
  }
  return false;
}
