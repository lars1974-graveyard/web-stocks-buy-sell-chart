package dk.lrn.stockservice.stockservice

import com.fasterxml.jackson.databind.JsonNode
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@SpringBootApplication
class StockserviceApplication

fun main(args: Array<String>) { runApplication<StockserviceApplication>(*args) }

@Suppress("unused")
@RestController
class StocksResource {
	val cache = mutableMapOf<String, List<Price>>()
	@GetMapping("/stocks/history/{isin}", produces = [MediaType.APPLICATION_JSON_VALUE])
	fun getStocks(@PathVariable("isin") isin: String): List<Price> {
		val prices = mutableListOf<Price>()
		cache[isin]?.let { return it }
		println("get it")
		val url = "http://tools.morningstar.dk/api/rest.svc/timeseries_price/nen6ere626?id=${isin}&idtype=ISIN&outputType=JSON&startDate=2014-01-01&currencyId=DKK"
		println(url)
		val list = RestTemplate().getForEntity(url, JsonNode::class.java).body!!.findPath("HistoryDetail")

		list.elements().forEach {
			prices.add(Price(it.get("EndDate").textValue(), it.get("Value").textValue()))
		}
		cache[isin] = prices
		return cache[isin]!!
	}
}

class Price(val date: String, val price: String)

@Configuration
class MvcConfig : WebMvcConfigurer   {

	override fun addCorsMappings( registry: CorsRegistry) {
		println("cors")
		registry.addMapping("/**").allowedOrigins("*");
	}
}



