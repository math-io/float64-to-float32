# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

# Positive normal values:
x = linspace( 0, 1001, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./positive_normal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )

# Negative normal values:
x = linspace( -1001, 0, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./negative_normal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Positive small values:
x = linspace( 0, 1, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./positive_small.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative small values:
x = linspace( -1, 0, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./negative_small.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Positive tiny values:
x = linspace( 5e-39, 1e-30, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./positive_tiny.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative tiny values:
x = linspace( -5e-39, -1e-30, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./negative_tiny.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Positive subnormal values:
x = linspace( 1e-40, 1e-45, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./positive_subnormal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Negative subnormal values:
x = linspace( -1e-40, -1e-45, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./negative_subnormal.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Large positive values:
x = linspace( 1e36, 1e38, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./positive_large.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )


# Large negative values:
x = linspace( -1e36, -1e38, 500 )

y = zeros( length(x) )
for i in eachindex(x)
	# Mimic implicit type promotion in JavaScript:
	y[i] = convert(Float64, convert(Float32, x[i]))
end

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./negative_large.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )