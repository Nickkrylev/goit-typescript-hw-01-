interface Details {
    createAt: Date;
    updateAt: Date;
  }
  
  interface Page {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: Details; 
  }
  