import{V as B,C as W,r as N,s as C}from"./index-CrohNCBe.js";class U{parse(j){let r="",u=0,v=0,A=0;const o=new B,g=new W,d=new B,M=new N,y=[];function w(e){let m=0,x=0,l=0;const f=e.geometry,t=new C,i=f.getAttribute("position"),s=f.getAttribute("normal"),p=f.getAttribute("uv"),V=f.getIndex();if(r+="o "+e.name+`
`,e.material&&e.material.name&&(r+="usemtl "+e.material.name+`
`),i!==void 0)for(let n=0,a=i.count;n<a;n++,m++)o.fromBufferAttribute(i,n),o.applyMatrix4(e.matrixWorld),r+="v "+o.x+" "+o.y+" "+o.z+`
`;if(p!==void 0)for(let n=0,a=p.count;n<a;n++,l++)M.fromBufferAttribute(p,n),r+="vt "+M.x+" "+M.y+`
`;if(s!==void 0){t.getNormalMatrix(e.matrixWorld);for(let n=0,a=s.count;n<a;n++,x++)d.fromBufferAttribute(s,n),d.applyMatrix3(t).normalize(),r+="vn "+d.x+" "+d.y+" "+d.z+`
`}if(V!==null)for(let n=0,a=V.count;n<a;n+=3){for(let c=0;c<3;c++){const b=V.getX(n+c)+1;y[c]=u+b+(s||p?"/"+(p?v+b:"")+(s?"/"+(A+b):""):"")}r+="f "+y.join(" ")+`
`}else for(let n=0,a=i.count;n<a;n+=3){for(let c=0;c<3;c++){const b=n+c+1;y[c]=u+b+(s||p?"/"+(p?v+b:"")+(s?"/"+(A+b):""):"")}r+="f "+y.join(" ")+`
`}u+=m,v+=l,A+=x}function z(e){let m=0;const x=e.geometry,l=e.type,f=x.getAttribute("position");if(r+="o "+e.name+`
`,f!==void 0)for(let t=0,i=f.count;t<i;t++,m++)o.fromBufferAttribute(f,t),o.applyMatrix4(e.matrixWorld),r+="v "+o.x+" "+o.y+" "+o.z+`
`;if(l==="Line"){r+="l ";for(let t=1,i=f.count;t<=i;t++)r+=u+t+" ";r+=`
`}if(l==="LineSegments")for(let t=1,i=t+1,s=f.count;t<s;t+=2,i=t+1)r+="l "+(u+t)+" "+(u+i)+`
`;u+=m}function L(e){let m=0;const x=e.geometry,l=x.getAttribute("position"),f=x.getAttribute("color");if(r+="o "+e.name+`
`,l!==void 0){for(let t=0,i=l.count;t<i;t++,m++)o.fromBufferAttribute(l,t),o.applyMatrix4(e.matrixWorld),r+="v "+o.x+" "+o.y+" "+o.z,f!==void 0&&(g.fromBufferAttribute(f,t).convertLinearToSRGB(),r+=" "+g.r+" "+g.g+" "+g.b),r+=`
`;r+="p ";for(let t=1,i=l.count;t<=i;t++)r+=u+t+" ";r+=`
`}u+=m}return j.traverse(function(e){e.isMesh===!0&&w(e),e.isLine===!0&&z(e),e.isPoints===!0&&L(e)}),r}}export{U as OBJExporter};
//# sourceMappingURL=OBJExporter-DMReACOy.js.map
