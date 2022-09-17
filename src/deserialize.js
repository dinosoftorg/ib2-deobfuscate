let readBits = (input, start, end) => {
  let mask = ( ( 1 << ( end - start + 1) ) - 1) << start
	return (input & mask) >> start
}