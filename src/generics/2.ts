type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  }

  function compare<T extends Pick<AllType, 'name' | 'color'> & Record<string, any>, U extends Pick<AllType, 'position' | 'weight'> & Record<string, any>>(top: T, bottom: U): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }
  
  const top = {
    name: "Apple",
    color: "Red",
    otherField: "example" 
  };
  
  const bottom = {
    position: 1,
    weight: 100,
    otherField: "example"  
  };
  
  const result = compare(top, bottom);
  console.log(result);
  